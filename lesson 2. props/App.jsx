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
        menuItems: ["Новая игра", "Загрузить игру", "Таблица рекордов", "Об авторах", "Выйти"],
        onMenuSelect: (item) => alert(`Выбран пункт: ${item}`)
    };

    const buttonProps = {
        label: "Начать игру!",
        onClick: () => alert("Игра началась!"),
        clickCount: 5
    };

    const contentProps = {
        welcomeMessage: "Добро пожаловать в игру!",
        settings: { difficulty: "Ферзь", players: 21 },
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