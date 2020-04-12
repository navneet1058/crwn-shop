import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth } from '../../firebase/firebase.utiities';

import './sign-up.styles.scss'

class SignUp extends React.Component {
    constructor(){
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        };
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { email, password, confirmPassword } = this.state;

        if(password !== confirmPassword){
            alert("Passwords don't match");
        }

        try {
            await auth.createUserWithEmailAndPassword(email, password);

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '',
            });
        } catch (error) {
            console.log(error);
        }
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    }

    render(){
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        name='displayName'
                        type='text'
                        value={displayName}
                        onChange={this.handleChange}
                        label="Display Name"
                        required
                    />
                    <FormInput
                        name='email'
                        type='text'
                        value={email}
                        onChange={this.handleChange}
                        label="Email"
                        required
                    />
                    <FormInput
                        name='password'
                        type='password'
                        value={password}
                        onChange={this.handleChange}
                        label="Password"
                        required
                    />
                    <FormInput
                        name='confirmPassword'
                        type='password'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label="Confirm Password"
                        required
                    />
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignUp;
