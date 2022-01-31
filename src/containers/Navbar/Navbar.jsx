/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './navbar.css'

const Navbar = () => {

    return (
        <div className="navbar max-w-6xl mx-auto">
            <div className="primary-nav flex justify-between py-6">
                <div className="logo">
                    <a href="/">Ferhat Cihaner</a>
                </div>
                <div className="flex items-center space-x-6">
                    <a href="/">HAKKIMDA</a>
                    <a href="/calismalarimiz">ÇALIŞMALARIMIZ</a>
                    <a href="/yolculugabasla">YOLCULUĞA BAŞLA</a>
                    <a href="/iletisim">İLETİŞİM</a>
                </div>
            </div>
        </div>
      );
}

export default Navbar