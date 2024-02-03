import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CreateAccount = () => {
    const naviagte = useNavigate();
    const [email,setEmail] = useState();
    const [phone ,setPhone] =useState();
    const [dob,setDob] = useState();
    const [pincode,setPincode] = useState();
    const [city,setCity] = useState();
    const [state,setState] = useState();
    const [degree,setDegree]= useState();
    const [course,setCourse]  =useState();

    const handleSubmit = async()=>{
        await axios.post('/account', {email, phone , pincode, city ,state, dob , degree, course})
        .then(response => {
           console.log('Account Created');
        })
        .catch(error => {
          console.error('Error submitting form:', error);
        });
    }

    return (
        <div>
            <div className='h-screen flex items-center bg-blue-300'>
                <div className="container">
                    <div className="signup-content">
                        <div className="pd-form">
                            <h2 className="form-title">Personal Details</h2>
                            <form onSubmit={handleSubmit}  method="POST" className="register-form">
                                <div class="col-sm-10 my-3">
                                    <input type="email" class="form-control" placeholder="email" readOnly value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                                </div>
                                <div class="col-sm-10 my-3">
                                    <input type="text" class="form-control" placeholder="Phone" value={phone} onChange={(e)=>{setPhone(e.target.value)}}/>
                                </div>
                                <div className='flex gap-3 items-center my-3'>
                                    <span>DOB:</span>
                                    <input type='date' value={dob} onChange={(e)=>{setDob(e.target.value)}}/>
                                </div>

                                <span className='mb-3'>Address:</span>
                                <div className='flex flex-col gap-1 mb-3'>
                                    <div class="col-sm-6">
                                        <input type="text" class="form-control" placeholder="Pincode" aria-label="Zip" value={pincode} onChange={(e)=>{setPincode(e.target.value)}}/>
                                    </div>
                                    <div class="col-sm-8">
                                        <input type="text" class="form-control" placeholder="City" aria-label="City" value={city} onChange={(e)=>{setCity(e.target.value)}}/>
                                    </div>
                                    <div class="col-sm-8">
                                        <input type="text" class="form-control" placeholder="State" aria-label="State" value={state} onChange={(e)=>{setState(e.target.value)}}/>
                                    </div>

                                </div>

                                <span>Education</span>
                                <select class="form-select h-10 mb-1 w-72" aria-label="Default select example" value={degree} onChange={(e)=>{setDegree(e.target.value)}}>
                                    <option selected>Degree</option>
                                    <option value="B.tech">B.Tech</option>
                                    <option value="B.sc">B.Sc</option>
                                    <option value="B.com">B.Com</option>
                                </select>
                                <div class="col-sm-8">
                                    <input type="text" class="form-control" placeholder="Course"value={course} onChange={(e)=>{setCourse(e.target.value)}} />
                                </div>
                                <div>
                                    <button onClick={() => { naviagte('/account') }} type='submit' className='submitbtn'>View Account</button>
                                </div>
                            </form>
                        </div>
                        <div className="pd-image">
                            <div><img src='https://img.freepik.com/premium-vector/businessman-sitting-desk-working-computer-office_165488-1059.jpg' alt="sing up image" /></div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CreateAccount