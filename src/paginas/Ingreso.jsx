import React from 'react'
import { useNavigate } from 'react-router';
import useFormData from '../hooks/useFormData'
import Header from '../components/Header.jsx'
import logo from '../media/logo.png'
import '../estilos/contenido.scss'

const Ingreso = () => {

    const { form, formData, updateFormData } = useFormData(null)

    const navigate = useNavigate();
    return (
        <div>
            <Header />
            <div className='contenedor '>
                <div className='borde registro'>

                    <img className='logo borde' src={logo} alt="logo_registro" id='logo_registro' />

                    <div className='borde'>
                        <h3>Datos del jugador</h3>
                        <form className='borde'>
                            <input className='mb-3' required type='text' placeholder='Tu numero de identificación' name='identificacion' />
                            <input className='mb-3' required type='text' placeholder='Tus nombres' name='nombres' />
                            <input className='mb-3' required type='text' placeholder='Tus apellidos' name='apellidos' />
                            <button type='submit'> Agregar usuario</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ingreso
