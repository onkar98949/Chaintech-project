import React, { useState }  from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const naviagte = useNavigate();
    const [name , setName ] = useState('');
    const [email , setEmail] = useState('');
    const [password,setPassword] = useState('');

    const handleSubmit = async()=>{
        await axios.post('/register', {name,email,password})
        .then(response => {
           naviagte('/login')
        })
        .catch(error => {
          console.error('Error submitting form:', error);
        });
    }


    return (
        <div className='h-screen bg-blue-300 flex items-center'>
            <div className="container">
                <div className="signup-content">
                    <div className="signup-form">
                        <h2 className="form-title">Sign up</h2>
                        <form method="POST" className="register-form">
                            <div className='form-group'>
                                <label ><i class="ri-user-fill"></i></label>
                                <div>
                                <input type="text" name="name" id="name" placeholder="Your Name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                                </div>
                            </div>
                           
                            <div className='form-group'>
                                <label><i class="ri-mail-fill"></i></label>
                                <div>
                                <input type="email" name="email" id="email" placeholder="Your Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                
                                </div>
                            </div>
                            <div className='form-group'>
                                <label><i class="ri-lock-fill"></i></label>
                                <div>
                                <input type="password" name="password" id="password" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                                </div>
                            </div>
                            
                            <div>
                               <button type='submit' className='submitbtn'>Next</button>
                            </div>
                        </form>
                    </div>
                    <div className="signup-image">
                        <div><img src='https://img.freepik.com/premium-vector/illustration-vector-graphic-cartoon-character-login_516790-1261.jpg' alt="sing up image" /></div>
                        <Link to={'/login'} className='font-serif text-blue-800 underline ml-10 mt-5'>Already a member? Login</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register