import React, { useState } from 'react'
import './AddNurseNumber.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddNurseNumber = () => {
    const navigate = useNavigate();

    const [values, setValues] = useState({
        ID: "",
        PhoneNo: "",
        NurseID: ""
    })

    function handleAddNurseNumber(e) {
        e.preventDefault()
        axios.post('/add_nurse_number', values)
            .then((res) => {
                // navigate('/add_nurse_email');
                console.log(res);
            })
            .catch((err) => console.log(err));
    }

    return (
        <div className='add-nurse-number'>
            <div className='box add-nurse-number-container'>
                <h1 className='title is-2 add-nurse-number-title'>Add Nurse Number</h1>
                <form className='add-nurse-number-form' onSubmit={handleAddNurseNumber}>
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
                        <label class="label">Nurse ID</label>
                        <div class="control">
                        <input class="input" type="number" id='NurseID' onChange={(e) => setValues({...values, NurseID: e.target.value})} />
                        </div>
                    </div>
        
                    <Link to='/add-nurse-email'><button class="button is-primary add-nurse-number-btn">Continue</button></Link>
                </form>
            </div>
        </div>
    )
}

export default AddNurseNumber