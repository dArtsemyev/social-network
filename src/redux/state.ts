export type PostType = {
    id: number
    message: string
    likeCount: number
}
export type DialogType = {
    id: number
    name: string
    ava: string
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
            {id: 1, name: "Dmitry", ava: "https://a.deviantart.net/avatars/t/a/tanchotancho.jpg?4"},
            {id: 2, name: "Vasya", ava: "https://121clicks.com/wp-content/uploads/2020/05/black_and_white_portraits_mahesh_20.jpg"},
        ],
        messages: [
            {id: 1, message: "Hi"},
            {id: 2, message: "Hello"},
            {id: 3, message: "Good by"},
            {id: 4, message: "by"},
            {id: 5, message: "Yooo"},
            {id: 6, message: "nimg.com/236x/d1/02/ by"},
            {id: 7, message: "Good by"},
        ],
    },
    sideBar: {
        friends: [
            {id: 1, name: "Petya", ava: "https://i.pinimg.com/236x/d1/02/73/d102738ed75c80128eda38ba80c5fd37.jpg"},
            {id: 2, name: "Kolya", ava: "https://photoclub.by/images/mobile83/838378_mobile.jpg"},
            {id: 3, name: "Aliona", ava: "https://i1.sndcdn.com/avatars-000105246287-9ac5t6-t500x500.jpg"},
        ],
    },
}