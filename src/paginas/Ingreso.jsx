import React from 'react'
import { useNavigate } from 'react-router';
import useFormData from '../hooks/useFormData'
import Header from '../components/Header.jsx'

const Ingreso = () => {

    const { form, formData, updateFormData } = useFormData(null)

    const navigate = useNavigate();
    return (
        <div>
            <Header/>

            <div>
                <h3>Datos del jugador</h3>
            </div>
            <form className='abs-center display-flex mb-3'>
                
                <input className='mb-3' required type='text' placeholder='Tu numero de identificación' name='identificacion'/>
                <input className='mb-3' required type='text' placeholder='Tus nombres' name='nombres'/>
                <input className='mb-3' required type='text' placeholder='Tus apellidos' name='apellidos'/>
                <button type='submit'> Agregar usuario</button>
            </form>
        </div>
    )
}

export default Ingreso
