const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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

            ]
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
        if (action.type === 'ADD-POST') {
            const newPost: PostType = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = ''
            this._onChange();
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._onChange();
        }
    }

}

export const addPostActionCreator = () => ({ type: ADD_POST }) as const
export const updateNewPostTextActionCreator = (text:string)=> ({
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }) as const


export type ActionsTypes=ReturnType<typeof addPostActionCreator> | ReturnType<typeof updateNewPostTextActionCreator>

export type StoreType = {
    _state: RootStateType
    //updateNewPostText: (newText: string) => void
   //addPost: () => void
    _onChange: () => void
    subscribe: (observer: () => void) => void
    getState: () => RootStateType
    dispatch:(action: ActionsTypes)=>void
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


export default store;