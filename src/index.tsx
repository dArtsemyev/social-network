import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import * as serviceWorker from './serviceWorker';

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

let posts: Array<PostType> = [
    {id: 1, message: "My first post", likeCount: 15},
    {id: 2, message: "My second post", likeCount: 20},
]
let dialogs: Array<DialogType> = [
    {id: 1, name: "Dmitry"},
    {id: 2, name: "Vasya"},
]
let messages: Array<MessageType> = [
    {id: 1, message: "Hi"},
    {id: 2, message: "Hello"},
    {id: 3, message: "Good by"},
]

ReactDOM.render(
    <React.StrictMode>
        <App posts={posts} dialogs={dialogs} messages={messages}/>
    </React.StrictMode>,
    document.getElementById('root')
);

//serviceWorker.unregister();


