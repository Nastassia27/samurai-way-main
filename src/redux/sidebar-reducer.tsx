import {SidebarType, StoreType} from "./store";


let initialState = {
    friends: [
        {id: 1, name: 'Nick'},
        {id: 2, name: 'Mike'},
        {id: 3, name: 'Jack'},
        {id: 4, name: 'Alisa'},
    ]
}
const sidebarReducer = (state=initialState, action: any) => {
    return state;
}

export default sidebarReducer;