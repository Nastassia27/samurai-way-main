import {combineReducers, legacy_createStore as createStore} from "redux"
import {reducer} from "redux-form";
import dialogsReducer, {addMessageActionCreator, updateNewMessageAC} from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import profileReducer, {addPostActionCreator, updateNewPostTextActionCreator} from "./profile-reducer";
import usersReducer, {followAC, SetCurrentPageAC, SetTotalUsersCountAC, setUsersAC, unfollowAC} from "./users-reducer";

export type ActionsTypes =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostTextActionCreator>
    | ReturnType<typeof addMessageActionCreator>
    | ReturnType<typeof updateNewMessageAC>
    | ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof SetCurrentPageAC>
    | ReturnType<typeof SetTotalUsersCountAC>






let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
});

let store = createStore(reducers);

type RootReducerType = typeof reducers
export type AppStateType = ReturnType<RootReducerType>


export default store