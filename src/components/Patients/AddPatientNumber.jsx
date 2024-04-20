import React, { useState } from 'react'
import './AddPatientNumber.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddPatientNumber = () => {
    const navigate = useNavigate();

    const [values, setValues] = useState({
        ID: "",
        PhoneNo: "",
        PID: ""
    })

    function handleAddPatientNumber(e) {
        e.preventDefault()
        axios.post('/add_patient_number', values)
            .then((res) => {
                // navigate('/add-patient');
                console.log(res);
            })
            .catch((err) => console.log(err));
    }

    return (
        <div className='add-patient-number'>
            <div className='box add-patient-number-container'>
                <h1 className='title is-2 add-patient-number-title'>Add Patient Number</h1>
                <form className='add-patient-number-form' onSubmit={handleAddPatientNumber}>
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
                        <label class="label">Patient ID</label>
                        <div class="control">
                        <input class="input" type="number" id='PID' onChange={(e) => setValues({...values, PID: e.target.value})} />
                        </div>
                    </div>

                    <Link to='/add-patient-email'><button class="button is-primary add-patient-number-btn">Continue</button></Link>
                </form>
            </div>
        </div>
    )
}

export default AddPatientNumber