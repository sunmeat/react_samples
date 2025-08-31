import React, { useState } from 'react';
import './App.css'; // директиви Tailwind

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
    const toggleModal = () => setIsModalOpen(!isModalOpen);

    return (
        <div className={`min-h-screen w-full ${isDarkMode ? 'dark bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-indigo-100'} transition-all duration-500`}>
            {/* перемикач темної теми */}
            <button
                onClick={toggleDarkMode}
                className="fixed top-4 right-4 z-50 p-3 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-transform transform hover:scale-110 shadow-lg"
            >
                {isDarkMode ? 'Світла тема' : 'Темна тема'}
            </button>

            <header className="w-full py-12 text-center">
                <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-300 dark:to-purple-400 animate-pulse">
                    React + Tailwind = 💣🚀
                </h1>
                <p className="mt-4 text-lg md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                    Приклад крутезного інтерфейсу з використанням Tailwind CSS
                </p>
            </header>

            {/* картки */}
            <section className="w-full px-4 md:px-8 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {/* картка 1 */}
                    <div className="group relative bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300"></div>
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">Адаптивність</h2>
                        <p className="text-gray-600 dark:text-gray-400">
                            Tailwind дозволяє легко створювати адаптивні макети за допомогою утиліт накшталт <code>sm:</code>, <code>md:</code>, <code>lg:</code>
                        </p>
                    </div>

                    {/* картка 2 */}
                    <div className="group relative bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300"></div>
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">Анімації</h2>
                        <p className="text-gray-600 dark:text-gray-400">
                            Плавні переходи та ефекти робляться за допомоги <code>transition</code>, <code>hover:</code> та <code>animate-</code>
                        </p>
                    </div>

                    {/* картка 3 */}
                    <div className="group relative bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300"></div>
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">Темна тема</h2>
                        <p className="text-gray-600 dark:text-gray-400">
                            Теми перемикаються префіксом <code>dark:</code>
                        </p>
                    </div>
                </div>
            </section>

            {/* секція із стрибаючою кнопкою та модальним вікном */}
            <section className="w-full text-center py-12">
                <button
                    onClick={toggleModal}
                    className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
                >
                    Tailwind це казка ✨
                </button>

                {/* модальне вікно */}
                {isModalOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40">
                        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl max-w-md w-full mx-4 transform animate-bounce">
                            <h2 className="text-3xl font-bold text-indigo-600 dark:text-indigo-300 mb-4">Tailwind бімба!</h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                Це модальне вікно створено за допомогою Tailwind. Воно адаптивне, анімоване і навіть підтримує темну тему!
                            </p>
                            <button
                                onClick={toggleModal}
                                className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300"
                            >
                                Закрити
                            </button>
                        </div>
                    </div>
                )}
            </section>

            {/* футер */}
            <footer className="w-full py-8 text-center bg-gray-200 dark:bg-gray-800">
                <p className="text-gray-600 dark:text-gray-400">
                    Tailwind єто круто, Tailwind єто кльово ❤️
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                    Як тобі такє, Ілоне Маск! 🚀
                </p>
            </footer>
        </div>
    );
}

export default App;
