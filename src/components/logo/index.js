import React from 'react';

import logo from '../../assets/logo.png'
import './styles.css'

function Logo () {
    return (
        <div className="logon-container">
            <header>
                <img src={logo} alt="Logo da página" />
            </header>
        </div>
    )
}

export default Logo