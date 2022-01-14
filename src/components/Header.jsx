import React from 'react'
import '../estilos/header.scss'
import logo from '../media/logo.png'

const Header = () => {
    return (
        <div className='header'>
            <img className='logo' src={logo} alt="logo_concurso" id='logo_header' />
            <span className='title'><b>Este es el header</b></span>
        </div>
    )
}

export default Header
