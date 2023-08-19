import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import {Sidebar} from "../Sidebar/Sidebar";
import {AppStateType} from "../../redux/redux-store";
import {useSelector} from "react-redux";


type PropsType = {
   // store: AppStateType
}
const Navbar: React.FC<PropsType> = (props) => {
    const state = useSelector((state: AppStateType) => state);
    //let state = props.store
    let oneFriend = state.sidebar.friends.map(friend => <Sidebar friend={friend}/>)
    return (
        <div>
            <nav className={s.nav}>
                <div className={s.item}>
                    <NavLink to='/profile' activeClassName={s.activeLink}> Profile</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/dialogs' activeClassName={s.activeLink}> Messages</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/users' activeClassName={s.activeLink}>Users</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/news' activeClassName={s.activeLink}> News</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/music' activeClassName={s.activeLink}> Music</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/settings' activeClassName={s.activeLink}> Settings</NavLink>
                </div>
                <div className={s.side}>
                    <h1>Friends</h1>
                   <div>{oneFriend}</div>
                </div>

            </nav>

        </div>
    )
}

export default Navbar;