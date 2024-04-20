import React, { useState } from 'react'
import './AddPatient.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddPatient = () => {
    const navigate = useNavigate();

    const [values, setValues] = useState({
        PID: "",
        FirstName: "",
        MiddleName: "",
        LastName: "",
        Gender: "",
        DOB: "",
        BloodGroup: "",
        Address: "",
        Age: ""
    })

    function handleAddPatient(e) {
        e.preventDefault()
        axios.post('/add_patient', values)
            .then((res) => {
                // navigate('/add-patient-number');
                console.log(res);
            })
            .catch((err) => console.log(err));
    }

    return (
        <div className='add-patient'>
            <div className='box add-patient-container'>
                <h1 className='title is-2 add-patient-title'>Add Patient</h1>
                <form className='add-patient-form' onSubmit={handleAddPatient}>
                    <div class="field">
                        <label class="label">Patient ID</label>
                        <div class="control">
                        <input class="input" type="number" id='PID' onChange={(e) => setValues({...values, PID: e.target.value})} />
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">First Name</label>
                        <div class="control">
                        <input class="input" type="text" id='FirstName' onChange={(e) => setValues({...values, FirstName: e.target.value})} />
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Middle Name</label>
                        <div class="control">
                        <input class="input" type="text" id='MiddleName' onChange={(e) => setValues({...values, MiddleName: e.target.value})} />
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Last Name</label>
                        <div class="control">
                        <input class="input" type="text" id='LastName' onChange={(e) => setValues({...values, LastName: e.target.value})} />
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Gender</label>
                        <div class="control">
                        <input class="input" type="text" id='Gender' onChange={(e) => setValues({...values, Gender: e.target.value})} />
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">DOB</label>
                        <div class="control">
                        <input class="input" type="date" id='DOB' onChange={(e) => setValues({...values, DOB: e.target.value})} />
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Blood Group</label>
                        <div class="control">
                        <input class="input" type="text" id='BloodGroup' onChange={(e) => setValues({...values, BloodGroup: e.target.value})} />
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Address</label>
                        <div class="control">
                        <input class="input" type="text" id='Address' onChange={(e) => setValues({...values, Address: e.target.value})} />
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Age</label>
                        <div class="control">
                        <input class="input" type="number" id='Age' onChange={(e) => setValues({...values, Age: e.target.value})} />
                        </div>
                    </div>

                    <Link to='/add-patient-number'><button class="button is-primary add-patient-btn">Continue</button></Link>
                </form>
            </div>
        </div>
    )
}

export default AddPatient