import {ActionsTypes} from "./redux-store";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE='SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT='SET_TOTAL_USERS_COUNT'


type LocationType={
    city: string,
    country: string,
}
/*export type UsersType={
    id: number,
    followed: boolean,
    photoUrl: string,
    fullName: string,
    status: string,
    location: LocationType
}*/
export type UsersType={
    id: number,
    followed: boolean,
    photos: {
        small: string,
        large: string
    },
    name: string,
    status: string,
}


let initialState = {
    users: [

    ] as Array<UsersType>,
    pageSize: 50,
    totalUsersCount: 0,
    currentPage:1
}
type InitialStateType = typeof initialState
const usersReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u=> {
                    if(u.id===action.userId){
                        return{...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u=> {
                    if(u.id===action.userId){
                        return{...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS:
            return {...state,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {...state,
                currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state,
                totalUsersCount: action.totalUsersCount}
        default:
            return state;
    }

}
export const SetCurrentPageAC=(currentPage: number)=>({type: SET_CURRENT_PAGE, currentPage: currentPage}) as const
export const SetTotalUsersCountAC=(totalUsersCount: number)=>({type: SET_TOTAL_USERS_COUNT, totalUsersCount: totalUsersCount}) as const
export const followAC = (userId: number) => ({type: FOLLOW, userId: userId}) as const
export const unfollowAC = (userId: number) => ({type: UNFOLLOW, userId: userId}) as const
export const setUsersAC = (users: Array<UsersType>) => ({type: SET_USERS, users: users}) as const

export default usersReducer;