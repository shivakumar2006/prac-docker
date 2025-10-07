import React from 'react'; 
import Home from "./Components/home";
import "./App.css"
import {Routes, Route} from "react-router-dom";
import UserCard from './Components/userCard';

const App = () => {
    return (
        <>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/usercard' element={<UserCard />}/>
        </Routes>
        </>
    )
}

export default App; 