import React from 'react'
import './App.css'
import {MyButton} from "./components/mybutton/MyButton.jsx";

import { Header } from './components/header/Header.jsx';
import { Sidebar } from './components/sidebar/Sidebar.jsx';
import { Content } from './components/content/Content.jsx';

export function App() {
    return (
        <div className="app-container">
            <Header />
            <div className="main-container">
                <Sidebar />
                <Content />
            </div>
        </div>
    );
}

export default App