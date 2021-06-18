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
import {Route} from 'react-router-dom';
import {StateType} from "./redux/state";

type AppPropsType = {
    state: StateType
}

function App(props: AppPropsType) {
    return (
            <div className="app-wrapper">
                <Header/>
                <div className="nav-content">
                    <Navbar sideBarFriends={props.state.sideBar}/>
                    <div className="content">
                        <Route path="/profile"
                               render={() => <Profile profilePage={props.state.profilePage}/>}/>
                        <Route path="/dialogs"
                               render={() => <Dialogs dialogsPage={props.state.dialogsPage}/>}/>
                        <Route path="/news" render={() => <News/>}/>
                        <Route path="/music" render={() => <Music/>}/>
                        <Route path="/settings" render={() => <Settings/>}/>
                    </div>
                </div>
                <Footer/>
            </div>
    );
}

export default App;

