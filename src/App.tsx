import React from 'react';
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Footer from "./components/Footer/Footer";
import {BrowserRouter, Route} from 'react-router-dom';
import {DialogType, MessageType, PostType} from "./index";

type AppPropsType = {
    posts: Array<PostType>
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <div className="nav-content">
                    <Navbar/>
                    <div className="content">
                        <Route path="/profile" render={() => <Profile posts={props.posts}/>}/>
                        <Route path="/dialogs" render={() => <Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
                        <Route path="/news" render={() => <News/>}/>
                        <Route path="/music" render={() => <Music/>}/>
                        <Route path="/settings" render={() => <Settings/>}/>
                    </div>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;

