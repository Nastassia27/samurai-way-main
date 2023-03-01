import React from 'react';
import './App.css';
import Header from "./components/Header";


function App() {
    return (
        <div className='app-wrapper'>
<Header />
            <nav className='nav'>
                <div>
                   <a> Profile</a>
                </div>
                <div>
                    <a> Messages</a>
                </div>
                <div>
                    <a> News</a>
                </div>
                <div>
                    <a> Music</a>
                </div>
                <div>
                    <a> Settings</a>
                </div>
            </nav>
            <div className='content'>
                <div>
                <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'/>
                </div>
                <div>
                    ava+dexcription
                </div>
                <div>
                    my posts
                    <div>
                        new post
                    </div>
                    <div>
                        <div>
                            post1
                        </div>
                        <div>
                            post2
                        </div>
                    </div>
                </div>
                </div>
        </div>

    );
}


export default App;
