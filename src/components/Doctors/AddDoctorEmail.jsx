import React, { useState } from 'react'
import './AddDoctorEmail.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddDoctorEmail = () => {
    const navigate = useNavigate();

    const [values, setValues] = useState({
        ID: "",
        Email: "",
        DocID: ""
    })

    function handleAddDoctorEmail(e) {
        e.preventDefault()
        axios.post('/add_patient_email', values)
            .then((res) => {
                // navigate('/add-patient');
                console.log(res);
            })
            .catch((err) => console.log(err));
    }

    return (
        <div className='add-doctor-email'>
            <div className='box add-doctor-email-container'>
                <h1 className='title is-2 add-doctor-email-title'>Add Doctor Email</h1>
                <form className='add-doctor-email-form' onSubmit={handleAddDoctorEmail}>
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
                        <label class="label">Doctor ID</label>
                        <div class="control">
                        <input class="input" type="number" id='DocID' onChange={(e) => setValues({...values, DocID: e.target.value})} />
                        </div>
                    </div>

                    <Link to='/home'><button class="button is-primary add-doctor-email-btn">Submit</button></Link>
                </form>
            </div>
        </div>
    )
}

export default AddDoctorEmail