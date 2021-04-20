import React,{Component} from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends Component {
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        }
    }

    //function to set the value whenever submit is clicked
    handleSubmit=async event=>{
        event.preventDefault();
        const{email, password}= this.state;
        try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email:'',password:''})
        } catch(error){
            console.log(error);
        }
    };
        
    

    //function to capture the value of email and password typed by user
    handleChange=event=>{ //event is called whenever there is a request to handle the change
        //event has various properties , we used target and this target has value and name
        const {value,name}= event.target; 
        //to dynamically set property value
        this.setState({[name]:value}) 
    }

    render(){
        const {email,password}=this.state;
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" value={email} handleChange={this.handleChange} required='true' label='Email'/>
                    <FormInput name="password" type="password" value={this.state.password} handleChange={this.handleChange} required='true' label='Password'/>
                    <div classname='buttons'>
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton onClick={ signInWithGoogle } isGoogleSignIn>
                            
                            Sign in with Google
                    </CustomButton>
                    </div>
                   
                </form>
            </div>
        );
    }
}

export default SignIn;