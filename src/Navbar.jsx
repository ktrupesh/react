import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './componets/Header';
import './App.css';
import Footer from './componets/Footer';

function Navbar() {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default Navbar;