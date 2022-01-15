import React from 'react'
import '../estilos/header.scss'
import logo from '../media/logo.png'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div className='header'>
            <Link to='/'><img className='logo' src={logo} alt="logo_concurso" id='logo_header' /> </Link>
            {/* Agregar funcionalidad para que el titulo tome el nombre del modulo actual */}
            <span className='title '><b>Este es el header</b></span>
        </div>
    )
}

export default Header
