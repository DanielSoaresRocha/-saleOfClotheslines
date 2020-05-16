import React, { useEffect, useRef } from 'react'
import { TweenMax, TimelineLite, Power3 } from 'gsap'

import logo from '../../assets/logo.png'

import './styles.css'

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import { Menubar } from 'primereact/menubar';

function Logo (props) {
    let logoEffect = useRef(null)
    const tl = new TimelineLite()

    useEffect(() => {
        tl.from(logoEffect, 1.2, { x: 1200, ease: Power3.easeOut })
    })
    const menuitems = [
        {
            label: 'Início',
            icon: 'pi pi-fw pi-home',
            command: () => props.history.push('/')
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
                <img src={logo} alt="Logo da página" ref={el => logoEffect = el} />
            </header>
            <Menubar model={menuitems} />
        </div>
    )
}

export default Logo