import React from 'react';
import './App.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";


function App() {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
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
