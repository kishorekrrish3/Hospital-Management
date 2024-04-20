import React, { useState } from 'react'
import './AddPatientEmail.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddPatientEmail = () => {
    const navigate = useNavigate();

    const [values, setValues] = useState({
        ID: "",
        Email: "",
        PID: ""
    })

    function handleAddPatientEmail(e) {
        e.preventDefault()
        axios.post('/add_patient_email', values)
            .then((res) => {
                // navigate('/add-patient');
                console.log(res);
            })
            .catch((err) => console.log(err));
    }

    return (
        <div className='add-patient-email'>
            <div className='box add-patient-email-container'>
                <h1 className='title is-2 add-patient-email-title'>Add Patient Email</h1>
                <form className='add-patient-email-form' onSubmit={handleAddPatientEmail}>
                    <div class="field">
                        <label class="label">ID</label>
                        <div class="control">
                        <input class="input" type="number" id='ID' onChange={(e) => setValues({...values, ID: e.target.value})} />
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Email</label>
                        <div class="control">
                        <input class="input" type="email" id='Email' onChange={(e) => setValues({...values, Email: e.target.value})} />
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Patient ID</label>
                        <div class="control">
                        <input class="input" type="number" id='PID' onChange={(e) => setValues({...values, PID: e.target.value})} />
                        </div>
                    </div>

                    <Link to='/home'><button class="button is-primary add-patient-email-btn">Submit</button></Link>
                </form>
            </div>
        </div>
    )
}

export default AddPatientEmail