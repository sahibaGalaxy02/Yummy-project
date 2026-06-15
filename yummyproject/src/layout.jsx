import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './footer';
import './layout.css';

const Layout = () => {
    return (
        <div className="layout-container">
            <Navbar />
            <main className="content">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout;