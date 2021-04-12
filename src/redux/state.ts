import {rerenderEntireTree} from "../render";

export type PostsType = {
    id: number
    message: string
    likeCount: number
}
export type newPostType = {
    id: number
    message: string
    likeCount: number
}
export type DialogsType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    sender: string
    messages: string
}
export  type SideBarMenuType = {
    id: number
    sideBarMenuItemName: string
    path: string
}
export type FriendsBlockType = {
    id: number
    friendAvatarUrl: string
    friendName: string
}
export type ProfilePageType = {
    posts: Array<PostsType>
}
export type MyPostPropsType = {
    posts: Array<PostsType>
    addPost: (postMessage: string) => void
}
export type ProfilePagePropsType = {
    posts: Array<PostsType>
    addPost: (postMessage: string) => void
}
export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
}
export type SideBarType = {
    sideBarMenu: Array<SideBarMenuType>
    friendsBlock: Array<FriendsBlockType>
}

export type AppStateType = {
    state: StateType
    addPost: (postMessage: string) => void
}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sideBar: SideBarType
}

let state: StateType = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi, how are you?", likeCount: 12},
            {id: 2, message: "It's my first post", likeCount: 37},
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: "Dmitry"},
            {id: 2, name: "Ivan"},
            {id: 3, name: "Boris"},
        ],
        messages: [
            {id: 1, sender: "Self", messages: "Hi"},
            {id: 2, sender: "another_user", messages: "Hey"},
            {id: 3, sender: "Self", messages: "Lalaley"},
            {id: 4, sender: "another_user", messages: "Hey"},
            {id: 5, sender: "Self", messages: "Lalaley"},
            {id: 6, sender: "another_user", messages: "Hey"},
            {id: 7, sender: "Self", messages: "Lalaley"},
        ]
    },
    sideBar: {
        sideBarMenu: [
            {id: 1, sideBarMenuItemName: "Profile", path: "/profile"},
            {id: 2, sideBarMenuItemName: "Messages", path: "/dialogs"},
            {id: 3, sideBarMenuItemName: "News", path: "/news"},
            {id: 4, sideBarMenuItemName: "Music", path: "/music"},
            {id: 5, sideBarMenuItemName: "Settings", path: "/settings"},
        ],
        friendsBlock: [
            {id: 1, friendAvatarUrl: "https://i05.fotocdn.net/s106/39fa6af418b5b12a/user_xl/2298797445.jpg", friendName: "Vova"},
            {id: 1, friendAvatarUrl: "https://i05.fotocdn.net/s106/39fa6af418b5b12a/user_xl/2298797445.jpg", friendName: "Vanya"},
            {id: 1, friendAvatarUrl: "https://i05.fotocdn.net/s106/39fa6af418b5b12a/user_xl/2298797445.jpg", friendName: "Vadim"},
        ]
    }
}

export function addPost(postMessage: string) {
    let newPost: newPostType = {
        id: 3,
        message: postMessage,
        likeCount: 0
    }
    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state)
}

export default state;