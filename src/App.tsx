import React from 'react';
import "./App.css";

function App() {
    return (
        <div className="app-wrapper">
            <div className="header">
                <img src="https://cdn.logo.com/hotlink-ok/logo-social-sq.png" alt="logo"/>
            </div>
            <div className="nav-content">
                <div className="nav">
                    <div className="nav-button">
                        <a href="#a">Profile</a>
                    </div>
                    <div className="nav-button">
                        <a href="#a">Messages</a>
                    </div>
                    <div className="nav-button">
                        <a href="#a">News</a>
                    </div>
                    <div className="nav-button">
                        <a href="#a">Music</a>
                    </div>
                    <div className="nav-button">
                        <a href="#a">Settings</a>
                    </div>
                </div>
                <div className="content">
                    <div>
                        <img src="https://fabrikabz.ru/assets/gallery/17/1049.jpg" alt="content-pic"/>
                    </div>
                    <div>
                        ava + description
                    </div>
                    <div>
                        My posts
                        <div>
                            New post
                        </div>
                        <div>
                            <div>
                                post 1
                            </div>
                            <div>
                                post 2
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="footer">
                <div className="footer-nav">
                    <div className="footer-nav-button">
                        <a href="#a">Profile</a>
                    </div>
                    <div className="footer-nav-button">
                        <a href="#a">Messages</a>
                    </div>
                    <div className="footer-nav-button">
                        <a href="#a">News</a>
                    </div>
                    <div className="footer-nav-button">
                        <a href="#a">Music</a>
                    </div>
                    <div className="footer-nav-button">
                        <a href="#a">Settings</a>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default App;
