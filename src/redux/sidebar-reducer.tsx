import {ActionsTypes} from "./redux-store";


export type FriendsType = {
    id: number
    name: string
}

let initialState = {
    friends: [
        {id: 1, name: 'Nick'},
        {id: 2, name: 'Mike'},
        {id: 3, name: 'Jack'},
        {id: 4, name: 'Alisa'},
    ] as Array<FriendsType>
}
type InitialStateType=typeof initialState
const sidebarReducer = (state: InitialStateType=initialState, action: ActionsTypes) :InitialStateType=> {
    return state;
}

export default sidebarReducer;