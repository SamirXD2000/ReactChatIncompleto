import React, {Component} from 'react'
import withFirebaseAuth from 'react-with-firebase-auth'
import firebase from 'firebase/app'
import 'firebase/auth'
import firebaseConfig from '../firebaseConfig'
import {Redirect} from 'react-router-dom'


const firebaseApp = firebase.initializeApp(firebaseConfig)

class Bygoogle extends Component{

    render(){
        
        const{
            user,
            signOut,
            signInWithGoogle,
            signInWithFacebook,
        } = this.props

        return(

            <div>

                {
                    user 
                    ?<Redirect to='/home' />
                    :<Redirect to='/' />

                }

                {
                    user
                    ? <Redirect to='/home' />
                    :  <style type="text/css">{`.navchat {display: none}`}</style>
                }

                {
                    user
                    ?<button className='btn btn-light' onClick = {signOut} >Sign Out</button>
                    :<button className='btn btn-light' onClick = {signInWithGoogle} >Sign In With Google</button> 
                    
                }
                {
                    user
                    ?<button className='btn btn-light' onClick = {signOut} >Sign Out</button>
                    :<button className='btn btn-light' onClick = {signInWithFacebook} >Sign In With Facebook</button>
                }

            </div>
        )
    }

}

const firebaseAppAuth = firebaseApp.auth();

const providers = {

    googleProvider: new firebase.auth.GoogleAuthProvider(),
    facebookProvider: new firebase.auth.FacebookAuthProvider(),
}

export default withFirebaseAuth({
    providers,
    firebaseAppAuth
})(Bygoogle);