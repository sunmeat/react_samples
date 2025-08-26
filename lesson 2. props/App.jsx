import React from 'react'
import './App.css'
import {MyButton} from "./components/mybutton/MyButton.jsx";

import { Header } from './components/header/Header.jsx';
import { Sidebar } from './components/sidebar/Sidebar.jsx';
import { Content } from './components/content/Content.jsx';

export function App() {

    const headerProps = {
        title: "Heroes of Might and Magic III: The Shadow of React",
        userCount: 1530,
        theme: { background: "#4a90e2", color: "#ffffff", align: "center" }
    };

    const sidebarProps = {
        menuItems: ["Нова гра", "Завантажити гру", "Таблиця рекордів", "Про автора", "Вийти"],
        onMenuSelect: (item) => alert(`Обрано пункт: ${item}`)
    };

    const buttonProps = {
        label: "Почати гру!",
        onClick: () => alert("Гра почалась!"),
        clickCount: 5
    };

    const contentProps = {
        welcomeMessage: "Ласкаво просимо до гри!",
        settings: { difficulty: "Королівський", players: 11 },
        ButtonComponent: () => <MyButton {...buttonProps} />
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
