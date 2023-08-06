import {ActionsTypes} from "./redux-store";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS'


type LocationType={
    city: string,
    country: string,
}
type UsersType={
    id: number,
    followed: boolean,
    fullName: string,
    status: string,
    location: LocationType
}

let initialState = {
    users: [
       /* {
            id: 1,
            followed: false,
            fullName: 'Dmitry',
            status: "Hi it's my course",
            location: {city: 'minsk', country: 'Belarus'}
        },
        {
            id: 1,
            followed: true,
            fullName: 'Nastya',
            status: "Hello i'm student",
            location: {city: 'Limassol', country: 'Cyprus'}
        },
        {
            id: 1,
            followed: false,
            fullName: 'Vanya',
            status: "I don't understand what i'm doing here",
            location: {city: 'Nikosia', country: 'Cyprus'}
        },*/

    ] as Array<UsersType>,
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
            return {...state, users:[...state.users, ...action.users] }
        default:
            return state;
    }

}
export const followAC = (userId: number) => ({type: FOLLOW, userId: userId}) as const
export const unfollowAC = (userId: number) => ({type: UNFOLLOW, userId: userId}) as const
export const setUsersAC = (users: Array<UsersType>) => ({type: SET_USERS, users: users}) as const

export default usersReducer;