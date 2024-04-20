import React, { useState } from 'react'
import './AddMedicalRecord.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddMedicalRecord = () => {
    const navigate = useNavigate();

    const [values, setValues] = useState({
        MRID: "",
        PID: "",
        Symptoms: "",
        Diagnosis: "",
        Drugs: "",
        DocID: ""
    })

    function handleAddPatient(e) {
        e.preventDefault()
        axios.post('/add_medical_record', values)
            .then((res) => {
                // navigate('/home');
                console.log(res);
            })
            .catch((err) => console.log(err));
    }

    return (
        <div className='add-medical-record'>
            <div className='box add-medical-record-container'>
                <h1 className='title is-2 add-patient-title'>Add Medical Record</h1>
                <form className='add-medical-record-form' onSubmit={handleAddPatient}>
                    <div class="field">
                        <label class="label">Medical Record ID</label>
                        <div class="control">
                        <input class="input" type="number" id='MRID' onChange={(e) => setValues({...values, MRID: e.target.value})} />
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Patient ID</label>
                        <div class="control">
                        <input class="input" type="number" id='PID' onChange={(e) => setValues({...values, PID: e.target.value})} />
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Symptoms</label>
                        <div class="control">
                        <input class="input" type="text" id='Symptoms' onChange={(e) => setValues({...values, Symptoms: e.target.value})} />
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Diagnosis</label>
                        <div class="control">
                        <input class="input" type="text" id='Diagnosis' onChange={(e) => setValues({...values, Diagnosis: e.target.value})} />
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Drugs</label>
                        <div class="control">
                        <input class="input" type="text" id='Drugs' onChange={(e) => setValues({...values, Drugs: e.target.value})} />
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Doctor ID</label>
                        <div class="control">
                        <input class="input" type="number" id='DocID' onChange={(e) => setValues({...values, DocID: e.target.value})} />
                        </div>
                    </div>

                    <Link to='/home'><button class="button is-primary add-medical-record-btn">Submit</button></Link>
                </form>
            </div>
        </div>
    )
}

export default AddMedicalRecord