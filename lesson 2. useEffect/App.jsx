import React from 'react'
import './App.css'

import { Header } from './components/header/Header.jsx';
import { Sidebar } from './components/sidebar/Sidebar.jsx';
import { Content } from './components/content/Content.jsx';

export function App() {

    const headerProps = {
        title: "Heroes of JavaScript and React III: useEffect",
        userCount: 1530,
        theme: { background: "#4a90e2", color: "#ffffff", align: "center" }
    };

    const sidebarProps = {
        menuItems: ["Нова гра", "Завантажити гру", "Таблиця рекордів", "Автори", "Вихід"],
    };

    const contentProps = {
        welcomeMessage: "Ласкаво просимо!",
        settings: { difficulty: "Королівський", players: 11 }
    };

    return (
        <div className="app-container">
            <Header {...headerProps} />
            <div className="main-container">
                <Sidebar {...sidebarProps} />
                <Content {...contentProps} />
            </div>
        </div>
    );
}

export default App
