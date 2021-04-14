import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Dialogs} from './components/Dialogs/Dialogs';
import {Profile} from './components/Profile/Profile';
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';
import {Route} from 'react-router-dom';
import {AppStateType} from './redux/state';

function App(props: AppStateType) {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar sideBarMenu={props.state.sideBar.sideBarMenu}
                    friendsBlock={props.state.sideBar.friendsBlock}
            />
            <div className="app-wrapper-content">
                <Route path="/dialogs"
                       render={() => <Dialogs dialogs={props.state.dialogsPage.dialogs}
                                              messages={props.state.dialogsPage.messages}/>}/>
                <Route path="/profile"
                       render={() => <Profile posts={props.state.profilePage.posts}
                                              addPost={props.addPost}
                                              updateNewPostText={props.updateNewPostText}
                                              newPostText={props.state.profilePage.newPostText}
                       />}/>
                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
            </div>
        </div>
    );
}


export default App;
