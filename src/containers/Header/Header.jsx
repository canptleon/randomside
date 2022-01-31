import React from 'react';
import './header.css'

const Header = ({ title }) => {
    return (
        <div className="header flex justify-center py-6">
            <h1>{title}</h1>
        </div>
      );
}

export default Header;