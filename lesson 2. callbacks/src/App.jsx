import React from 'react';
import './App.css';
import { Content } from './components/content/Content.jsx';
import { AppContextProvider } from './contexts/AppContext.jsx';

export function App() {
    return (
        <AppContextProvider>
            <div className="app-container">
                <div className="main-container">
                    <Content />
                </div>
            </div>
        </AppContextProvider>
    );
}

export default App;