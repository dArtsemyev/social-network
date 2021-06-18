export type PostType = {
    id: number
    message: string
    likeCount: number
}
export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}
export type FriendType = {
    id: number
    name: string
    ava: string
}
export type PostsType = {
    posts: Array<PostType>
}
export type ProfilePageType = {
    posts: Array<PostType>
}
export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
export type SideBarType = {
    friends: Array<FriendType>
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sideBar: SideBarType
}

export let state: StateType = {
    profilePage: {
        posts: [
            {id: 1, message: "My first post", likeCount: 15},
            {id: 2, message: "My second post", likeCount: 20},
        ],
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: "Dmitry"},
            {id: 2, name: "Vasya"},
        ],
        messages: [
            {id: 1, message: "Hi"},
            {id: 2, message: "Hello"},
            {id: 3, message: "Good by"},
        ],
    },
    sideBar: {
        friends: [
            {id: 1, name: "Petya", ava: "https://i.pinimg.com/236x/d1/02/73/d102738ed75c80128eda38ba80c5fd37.jpg"},
            {id: 2, name: "Kolya", ava: "https://photoclub.by/images/mobile83/838378_mobile.jpg"},
            {id: 2, name: "Aliona", ava: "https://i1.sndcdn.com/avatars-000105246287-9ac5t6-t500x500.jpg"},
        ],
    },
}