import React, { useState } from 'react'
import './AddDoctorNumber.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
 
const AddDoctorNumber = () => {
    const navigate = useNavigate();

    const [values, setValues] = useState({
        ID: "",
        PhoneNo: "",
        DocID: ""
    })

    function handleAddDoctorNumber(e) {
        e.preventDefault()
        axios.post('/add_doctor_number', values)
            .then((res) => {
                // navigate('/add-patient');
                console.log(res);
            })
            .catch((err) => console.log(err));
    }

    return (
        <div className='add-doctor-number'>
            <div className='box add-doctor-number-container'>
                <h1 className='title is-2 add-doctor-number-title'>Add Doctor Number</h1>
                <form className='add-doctor-number-form' onSubmit={handleAddDoctorNumber}>
                    <div class="field">
                        <label class="label">ID</label>
                        <div class="control">
                        <input class="input" type="number" id='ID' onChange={(e) => setValues({...values, ID: e.target.value})} />
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Phone Number</label>
                        <div class="control">
                        <input class="input" type="number" id='PhoneNo' onChange={(e) => setValues({...values, PhoneNo: e.target.value})} />
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Doctor ID</label>
                        <div class="control">
                        <input class="input" type="number" id='PID' onChange={(e) => setValues({...values, PID: e.target.value})} />
                        </div>
                    </div>

                    <Link to='/add-doctor-email'><button class="button is-primary add-patient-number-btn">Continue</button></Link>
                </form>
            </div>
        </div>
    )
}

export default AddDoctorNumber 