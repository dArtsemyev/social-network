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
}
export type PostsType = {
    posts: Array<PostType>
}
export type DialogsType = {
    messages: Array<DialogType>
}
export type MessagesType = {
    messages: Array<MessageType>
}
export type FriendsType = {
    friends: Array<FriendType>
}
export type ProfilePage = {
    posts: Array<PostType>
}
export type DialogsPage = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
export type SiteBarType = {
    friends: Array<FriendType>
}

export type StateType = {
    profilePage: ProfilePage
    dialogsPage: DialogsPage
    siteBar: SiteBarType
}

export let state: StateType = {
    profilePage: {
        posts: [
            {id: 1, message: "My first post", likeCount: 15},
            {id: 2, message: "My second post", likeCount: 20},
        ]
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
    siteBar: {
        friends: [
            {id: 1, name: "Petya"},
            {id: 2, name: "Kolya"},
        ],
    },
}