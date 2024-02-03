import React ,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

const UpdateAccount = () => {
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
        await axios.put('/update-account', {email, phone , pincode, city ,state, dob , degree, course})
        .then(response => {
           console.log('Account Updated');
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
                    <div className="pd-form mx-auto">
                        <h2 className="form-title">Personal Details</h2>
                        <form  method="POST" className="register-form">
                            <div class="col-sm-14 my-3">
                                <input type="email" class="form-control" placeholder="email" readOnly value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                            </div>
                            <div class="col-sm-14 my-3">
                                <input type="text" class="form-control" placeholder="Phone" readOnly value={phone} onChange={(e)=>{setPhone(e.target.value)}}/>
                            </div>
                            <div className='flex gap-3 items-center my-3'>
                                <span>DOB:</span>
                                <input type='date' value={dob} readOnly onChange={(e)=>{setDob(e.target.value)}}/>
                            </div>

                            <span className='mb-3'>Address:</span>
                            <div className='flex flex-col gap-1 mb-3'>
                                <div class="col-sm-14">
                                    <input type="text" class="form-control" placeholder="Pincode" aria-label="Zip" readOnly value={pincode} onChange={(e)=>{setPincode(e.target.value)}}/>
                                </div>
                                <div class="col-sm-14">
                                    <input type="text" class="form-control" placeholder="City" aria-label="City" readOnly value={city} onChange={(e)=>{setCity(e.target.value)}}/>
                                </div>
                                <div class="col-sm-14">
                                    <input type="text" class="form-control" placeholder="State" aria-label="State" readOnly value={state} onChange={(e)=>{setState(e.target.value)}}/>
                                </div>

                            </div>

                            <span>Education</span>
                            <select class="form-select h-10 mb-1" aria-label="Default select example" readOnly value={degree} onChange={(e)=>{setDegree(e.target.value)}}>
                                <option selected>Degree</option>
                                <option value="B.tech">B.Tech</option>
                                <option value="B.sc">B.Sc</option>
                                <option value="B.com">B.Com</option>
                            </select>
                            <div class="col-sm-14">
                                <input type="text" class="form-control" placeholder="Course"value={course} readOnly onChange={(e)=>{setCourse(e.target.value)}} />
                            </div>
                            <div>
                                <button onClick={() => { naviagte('/account') }} type='submit' className='submitbtn'>Submit</button>
                            </div>
                        </form>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    )
}

export default UpdateAccount