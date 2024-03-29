/*
import profileReducer, {addPostActionCreator, updateNewPostTextActionCreator} from "./profile-reducer";
import dialogsReducer, {addMessageActionCreator, updateNewMessageAC} from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'hi', likesCount: 12},
                {id: 2, message: 'How are you', likesCount: 10},
                {id: 3, message: 'Good', likesCount: 100}
            ],
            newPostText: '',
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Sasha'},
                {id: 3, name: 'Masha'},
                {id: 4, name: 'Lera'},
                {id: 5, name: 'Alina'}
            ],

            messages: [
                {id: 1, message: 'hi'},
                {id: 2, message: 'How are you'},
                {id: 3, message: 'Good and you'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'buy'}

            ],
            newMessageBody: '',
        },
        sidebar: {
            friends: [
                {id: 1, name: 'Nick'},
                {id: 2, name: 'Mike'},
                {id: 3, name: 'Jack'},
                {id: 4, name: 'Alisa'},
            ]

        }
    },
    _onChange() {
        console.log('State was changed')
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._onChange = observer;
    },

    dispatch(action) { //это объект {type: 'ADD-POST'}

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._onChange();
    }

}



export type MessageType = {
    id: number
    message: string
}

export type DialogType = {
    id: number
    name: string
}

export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}

export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string
}

export type FriendsType = {
    id: number
    name: string
}

export type SidebarType = {
    friends: Array<FriendsType>
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: SidebarType
}


export default store;*/
let a = 1
export default a
