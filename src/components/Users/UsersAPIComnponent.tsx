import React from "react";
import styles from './users.module.css'
import {followAC, setUsersAC, unfollowAC, UsersType} from "../../redux/users-reducer";
import axios from "axios";
import userPhoto from '../../../src/assets/images/maltipu.jpg'
import Users from "./Users";


type PropsType = {
    users: Array<UsersType>
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    setUsers: (users: Array<UsersType>) => void
    pageSize: number,
    totalUsersCount: number
    currentPage: number
    setTotalUsersCount:(totalUsersCount: number)=>void
    setCurrentPage: (pageNumber: number)=>void
}

class UsersAPIComponent extends React.Component<PropsType>{

    componentDidMount() {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
                )
                .then((res) => {
                        this.props.setUsers(res.data.items)
                    this.props.setTotalUsersCount(res.data.totalCount)
                })

    }

    onPageChanged=(pageNumber: number)=>{
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
        )
            .then((res) => {
                this.props.setUsers(res.data.items)
            })
    }
    render (){

         return <Users totalUsersCount ={this.props.totalUsersCount}

         pageSize={this.props.pageSize}
         currentPage={this.props.currentPage}
                       onPageChanged={this.onPageChanged}
                       users={this.props.users}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}
         />
     }
}
export default UsersAPIComponent