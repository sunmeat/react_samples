import React from 'react';
import './App.css';
import { Header } from './components/header/Header.jsx';
import { Sidebar } from './components/sidebar/Sidebar.jsx';
import { Content } from './components/content/Content.jsx';
import { AppContextProvider } from './contexts/AppContext.jsx'; // !!! подключаем контекст
// пропсов больше нет

export function App() {
    return (
        <AppContextProvider>
            <div className="app-container">
                <Header />
                <div className="main-container">
                    <Sidebar />
                    <Content />
                </div>
            </div>
        </AppContextProvider>
    );
}

export default App;