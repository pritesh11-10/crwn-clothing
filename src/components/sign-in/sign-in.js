import React from 'react'
import FormInput from '../form-input/form-input'
import CustomButton from '../custom-button/custom-button'

import {signInWithGoogle} from '../../firebase/firebase.utils'
import './sign-in.scss'

class SignIn extends React.Component {
    constructor() {
        super();

        this.state={
            email:'',
            password:''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({email:'', password:''})
    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({ [name]:value })
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Signin</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        type='email' 
                        name='email' 
                        handleChange={this.handleChange} 
                        value={this.state.email} 
                        label='email' required/>
                    <FormInput 
                        type='password' 
                        name='password' 
                        handleChange={this.handleChange} 
                        value={this.state.password} 
                        label='password' required/>

                <div className='buttons'>
                    <CustomButton type='submit'> Sign In </CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn> 
                    {' '}
                    Sign In With Google{' '}
                    </CustomButton>
                </div>

                    

                </form>
            </div>
        )
    }
}

export default SignIn;