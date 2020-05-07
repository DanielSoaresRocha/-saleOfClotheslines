import React from 'react';
import { useHistory } from 'react-router-dom'

import './styles.css'
import Logo from '../../components/logo'

export default function About () {
    const history = useHistory()
    return (
        <Logo history={history} />
    );
}
