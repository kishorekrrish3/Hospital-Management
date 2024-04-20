import React, { useState } from 'react'
import './AddStaffNumber.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
 
const AddStaffNumber = () => {
    const navigate = useNavigate();

    const [values, setValues] = useState({
        ID: "",
        PhoneNo: "",
        SID: ""
    })

    function handleAddStaffNumber(e) {
        e.preventDefault()
        axios.post('/add_staff_number', values)
            .then((res) => {
                // navigate('/add-patient');
                console.log(res);
            })
            .catch((err) => console.log(err));
    }

    return (
        <div className='add-staff-number'>
            <div className='box add-staff-number-container'>
                <h1 className='title is-2 add-staff-number-title'>Add Staff Number</h1>
                <form className='add-staff-number-form' onSubmit={handleAddStaffNumber}>
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
                        <label class="label">Staff ID</label>
                        <div class="control">
                        <input class="input" type="number" id='SID' onChange={(e) => setValues({...values, SID: e.target.value})} />
                        </div>
                    </div>

                    <Link to='/home'><button class="button is-primary add-staff-number-btn">Submit</button></Link>
                </form>
            </div>
        </div>
    )
}

export default AddStaffNumber 