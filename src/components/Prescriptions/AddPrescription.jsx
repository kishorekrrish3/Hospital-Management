import React, { useState } from 'react'
import './AddPrescription.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddPrescription = () => {
    const navigate = useNavigate();

    const [values, setValues] = useState({
        ID: "",
        DocID: "",
        PID: "",
        Remark: "",
        Advice: "",
        Medicine: ""
    })

    function handleAddPrescription(e) {
        e.preventDefault()
        axios.post('/add_prescription', values)
            .then((res) => {
                // navigate('/home');
                console.log(res);
            })
            .catch((err) => console.log(err));
    }

    return (
        <div className='add-prescription'>
            <div className='box add-prescription-container'>
                <h1 className='title is-2 add-prescription-title'>Add Prescription</h1>
                <form className='add-prescription-form' onSubmit={handleAddPrescription}>
                    <div class="field">
                        <label class="label">Prescription ID</label>
                        <div class="control">
                        <input class="input" type="number" id='ID' onChange={(e) => setValues({...values, ID: e.target.value})} />
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Doctor ID</label>
                        <div class="control">
                        <input class="input" type="number" id='DocID' onChange={(e) => setValues({...values, DocID: e.target.value})} />
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Patient ID</label>
                        <div class="control">
                        <input class="input" type="number" id='PID' onChange={(e) => setValues({...values, PID: e.target.value})} />
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Remarks</label>
                        <div class="control">
                        <input class="input" type="text" id='Remarks' onChange={(e) => setValues({...values, Remarks: e.target.value})} />
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Advice</label>
                        <div class="control">
                        <input class="input" type="text" id='Advice' onChange={(e) => setValues({...values, Advice: e.target.value})} />
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Medicine</label>
                        <div class="control">
                        <input class="input" type="text" id='Medicine' onChange={(e) => setValues({...values, Medicine: e.target.value})} />
                        </div>
                    </div>
        
                    <Link to='/home'><button class="button is-primary add-prescription-btn">Submit</button></Link>
                </form>
            </div>
        </div>
    )
}

export default AddPrescription