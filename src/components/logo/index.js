import React from 'react';

import logo from '../../assets/logo.png'

import './styles.css'

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import { Menubar } from 'primereact/menubar';

function Logo (props) {
    const menuitems = [
        {
            label: 'Home',
            icon: 'pi pi-fw pi-home'
        },
        {
            label: 'Sobre',
            icon: 'pi pi-fw pi-user',
            command: () => props.history.push('/about')
        },
        {
            label: 'Contato',
            icon: 'pi pi-fw pi-comment'
        }
    ];
    return (
        <div className="logon-container">
            <header>
                <img src={logo} alt="Logo da página" />
            </header>
            <Menubar model={menuitems} />
        </div>
    )
}

export default Logo