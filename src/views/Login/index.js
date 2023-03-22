import { useState } from 'react'
import { reactLocalStorage } from 'reactjs-localstorage';
import { useNavigate } from 'react-router-dom';
import HttpClient from '../../utils/HttpClient';
import './login.style.css'
const Login=()=>{
    const navigate=useNavigate();
    const emalRegex=/(.+)@(.+){2,}\.(.+){2,}/;
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [emailError,setEmailError]=useState('')
    const [passwordError,setPasswordError]=useState('')
    const storeInputs=(e)=>{
        if(e.target.name==='email'){
            setEmail(e.target.value)  
        }
        else if(e.target.name==='password'){
            setPassword(e.target.value)
        }
    }

    const validate=async(e)=>{
        e.preventDefault();
        console.log("This called")
        if(!emalRegex.test(email)){
            setEmailError('Invalid Email')
        }
        else{
            setEmailError('')
        }
        console.log(password.length)
        if(password.length<6){
            setPasswordError('invalid Password')
        }
        else{
            setPasswordError('')
        }

        if(email.trim() !=="" && emailError ==="" && passwordError==='' && password.trim()!==""){
            let data = {
                email:email,
                password:password
            }
    
            let result = await HttpClient.requestData("login","POST",data)
             console.log(result)
            if(result && result.status){
               
                reactLocalStorage.setObject("userData",result.data)
                reactLocalStorage.set("token",result.data.token)
                navigate('/');
            }

        }
        

        // localStorage.setItem('status',true)
        
    }
    return(
        <div className='login'>
        <form onSubmit={validate}>
            <label htmlFor="username" className='form_labels' id="label_username">Username</label>
            <input type="text" placeholder={email} onChange={storeInputs} className='form_inputs' name="email" id="input_email"/>
            <span className={emailError===''?'d_none':'d_block'}>{emailError}</span>
            <label htmlFor="password" className='form_labels' id="label_password">Password</label>
            <input type="password" onChange={storeInputs}  placeholder={password} className='form_inputs' name="password" id="input_password"/>
            <span className={passwordError===''?'d_none':'d_block'}>{passwordError}</span>
            <button type="submit" className='login_button'>Login</button>
        </form>
        </div>
    )
}
export default Login;