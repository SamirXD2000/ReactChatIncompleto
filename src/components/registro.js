import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import firebase from 'firebase/app'
import 'firebase/auth'

export const Registro = () =>{

    const[usuario,setUser] = useState()
    const[password,setPass] = useState()
    const[repass,setRepass] = useState()

    const handleSubmit = (e) => {

            e.preventDefault()
            if(password == repass)
            {
                addUser(usuario,password)
            }
            else 
            {
                alert("Las contraseñas no coinciden")
            }
            console.log('presiono botón')
        
        
    }
    return(
        <div className='d-flex align-items-center justify-content-center'>
            <div className='col-md-4'>
                <form className='card card-body' onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label className='form-label'>Usuario</label>
                        <input type='email' className='form-control' onChange={e => setUser(e.target.value)} value={usuario} placeholder="Ingrese e-mail" />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Password</label>
                        <input type='password' className='form-control' onChange={e => setPass(e.target.value)} value={password} placeholder="Ingrese contraseña" />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Repetir Password</label>
                        <input type='password' className='form-control' onChange={e => setRepass(e.target.value)} value={repass} placeholder="Ingrese contraseña nuevamente" />
                    </div>

                        <button type='submit' className='btn btn-primary'>Guardar</button>

                </form>

                <Link className='navbar-brand' to='/login'>¿Ya estás registrado?</Link>

            </div>
        </div>
    )
}
    
function addUser(user,password){
    firebase.auth().createUserWithEmailAndPassword(user,password).then(res => {
        if (res.user) res.Auth.setLoggedIn(true)
    })
    .catch(e =>{
        console.log(e.message)
    })
}
