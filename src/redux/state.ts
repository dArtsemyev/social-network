export type PostsType = {
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
export type ProfilePageType = {
    posts: Array<PostsType>
}
export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
}
export type SideBarType = {}

export type AppStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sideBar: SideBarType
}

let state: AppStateType = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi, how are you?", likeCount: 12},
            {id: 2, message: "It's my first post", likeCount: 37}
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: "Dmitry"},
            {id: 2, name: "Ivan"},
            {id: 3, name: "Boris"}
        ],
        messages: [
            {id: 1, sender: "Self", messages: "Hi"},
            {id: 2, sender: "another_user", messages: "Hey"},
            {id: 3, sender: "Self", messages: "Lalaley"},
            {id: 4, sender: "another_user", messages: "Hey"},
            {id: 5, sender: "Self", messages: "Lalaley"},
            {id: 6, sender: "another_user", messages: "Hey"},
            {id: 7, sender: "Self", messages: "Lalaley"}
        ]
    },
    sideBar: {}
}
export default state;