import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import firebase, { Auth } from 'firebase/app'
import 'firebase/auth'
import Bygoogle from './Bygoogle'

export const Login = () =>{
    
    const[usuario,setUser] = useState()
    const[password,setPass] = useState()

    const handleSubmit = (e) => {

        e.preventDefault()
        setUser("")
        setPass("")
        login(usuario,password)

    }

    return(
        <div className='d-flex align-items-center justify-content-center'>
            <div className='col-md-4 '>
                <form className='card card-body ' onSubmit={handleSubmit}>
                    <div className='mb-3 '>
                        <label className='form-label row justify-content-center'>Usuario</label>
                        <input type='email' className='form-control' onChange={e => setUser(e.target.value)} value={usuario} placeholder="Ingrese e-mail" />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label row justify-content-center'>Password</label>
                        <input type='password' className='form-control' onChange={e => setPass(e.target.value)} value={password} placeholder="Ingrese contraseña" />
                    </div>

                    <button type='submit' className='btn btn-primary'>Entrar</button>
         

                </form>

                <Link className='navbar-brand row justify-content-center' to='/registro'>¿No estás registrado?</Link> <br />
                <Link className='navbar-brand row justify-content-center' to='/recuperar'>¿Olvidaste tu contraseña?</Link>

            </div>
        </div>
    )
}

function login(usuario,password){
    firebase
    .auth()
    .signInWithEmailAndPassword(usuario,password)
    .then(res => {
        if (res.user) res.Auth.setLoggedIn(true)
        
    })
    .catch(e =>{
        
        console.log()

    })
    
}