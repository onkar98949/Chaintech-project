import React ,{useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const naviagte= useNavigate();
    const [email , setEmail] = useState('');
    const [password,setPassword] = useState('');

    const handleSubmit = async()=>{
        await axios.post('/login', {email,password})
        .then(response => {
           naviagte('/create-account')
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
                        <h2 className="form-title">Login</h2>
                        <form method="POST" className="register-form">
                            
                            <div className='form-group'>
                                <label><i class="ri-mail-fill"></i></label>
                                <input type="email" name="email" id="email" placeholder="Your Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                            </div>
                            <div className='form-group'>
                                <label><i class="ri-lock-fill"></i></label>
                                <input type="password" name="pass" id="pass" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                            </div>
                            <div>
                                <button onClick={()=>{naviagte('/create-account')}} type='submit' className='submitbtn'>Login</button>
                            </div>
                        </form>
                    </div>
                    <div className="signup-image">
                        <div><img src='https://img.freepik.com/free-vector/business-man-celebrating-working-achievement_3446-704.jpg' alt="sing up image" /></div>
                        <Link to={'/'} className='font-serif text-blue-800 underline ml-10 mt-5'>New member? Register</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login