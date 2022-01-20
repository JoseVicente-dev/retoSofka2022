import React from 'react'
import {useState} from 'react'
import { useNavigate } from 'react-router';
import useFormData from '../hooks/useFormData'
import Header from '../components/Header.jsx'
import logo from '../media/logo.png'
import '../estilos/contenido.scss'

const Ingreso = () => {

    const { form, formData, updateFormData } = useFormData(null)

    const navigate = useNavigate();

    const [datosUsuario, setDatosUsuario] = useState({});

    const handleEvent = (e) =>{
        setDatosUsuario(datosUsuario=>({...datosUsuario,[e.target.name]: e.target.value}))
        console.log(datosUsuario)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(datosUsuario);
        alert(datosUsuario)
    }



    return (
        <div>
            <Header />
            <div className='contenedor '>
                <div className='borde registro'>

                    <img className='logo' src={logo} alt="logo_registro" id='logo_registro' />

                    
                        <h3>Para empezar a jugar, ingresa tus datos</h3>
                        <form className='' onSubmit={handleSubmit}>
                            <input className='mb-3' required type='number' placeholder='Tu número de identificación' name='identificacion' required={true} onChange={handleEvent}/>
                            <input className='mb-3' required type='text' placeholder='Tus nombres' name='nombres' required={true} onChange={handleEvent}/>
                            <input className='mb-3' required type='text' placeholder='Tus apellidos' name='apellidos' required={true} onChange={handleEvent}/>
                            <button type='submit'> Agregar usuario</button>
                        </form>
                    
                </div>
            </div>
        </div>
    )
}

export default Ingreso
