import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddUser from './pages/addUser';
import ListUsers from './pages/listUser';
import Header from './components/header';
import './app.css';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<AddUser />} />
                    <Route path="/list" element={<ListUsers />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
