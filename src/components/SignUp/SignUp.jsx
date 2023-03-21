import React ,{useState}from 'react'
import './SignUp.css';
import { useNavigate } from 'react-router-dom';

export function SignUp() {
    const[user,setUser]=useState('');
    const[pass,setPass]=useState('');
    const[mail,setMail]=useState('');
    const navigate=useNavigate();

    // console.log(user);
    // console.log(pass);
    // console.log(mail);
    const submit=(e)=>{
        e.preventDefault()
        localStorage.setItem('username',user)
        localStorage.setItem('password',pass)
        localStorage.setItem('email',mail)

        navigate('/');  
        
        

    }
    return (
        <div className='sign'>
            <div className='sign-wrapper'>
                <form onSubmit ={submit}>
                    <div className='htag'><h1>Sign Up</h1></div>
                    <div className='name'>
                        <label htmlFor="name">NAME * : </label>
                        <br />
                        <input 
                            type="text" 
                            id='name' 
                            className='same'
                            value={user}
                            placeholder='Enter your name' 
                            onChange={(e)=>setUser(e.target.value)}
                            required />
                    </div>
                    <div className='email'>
                        <label htmlFor="email">EMAIL * : </label>
                        <br />
                        <input 
                            type="email" 
                            className='same'
                            id='email' 
                            value={mail}
                            placeholder='Enter your email'
                            onChange={(e)=>setMail(e.target.value)}
                            required />
                    </div>
                    <div className='pass'>
                        <label htmlFor="pass">PASSWORD * : </label>
                        <br />
                        <input 
                            type="password"     
                            id="pass" 
                            value={pass}
                            className='same'
                            placeholder='Enter your password'
                            onChange={(e)=>setPass(e.target.value)}
                            required />
                    </div>
                    <div className='btn'>
                        <button className='btn-sub' type='submit'> SUBMIT </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
