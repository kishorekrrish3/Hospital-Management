import React, { useState } from 'react'
import './AddNurse.css' 
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddNurse = () => {
    const navigate = useNavigate();

    const [values, setValues] = useState({
        NurseID: "",
        FirstName: "",
        MiddleName: "",
        LastName: "",
        Gender: "",
        ExperienceYears: "",
        Age: ""
    })

    function handleAddNurse(e) {
        e.preventDefault()
        axios.post('/add_nurse', values)
            .then((res) => {
                // navigate('/add_nurse_number');
                console.log(res);
            })
            .catch((err) => console.log(err));
    }

    return (
        <div className='add-nurse'>
            <div className='box add-nurse-container'>
                <h1 className='title is-2 add-nurse-title'>Add Nurse</h1>
                <form className='add-nurse-form' onSubmit={handleAddNurse}>
                    <div class="field">
                        <label class="label">Nurse ID</label>
                        <div class="control">
                        <input class="input" type="number" id='NurseID' onChange={(e) => setValues({...values, NurseID: e.target.value})} />
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
                        <input class="input" type="text" id='Amount' onChange={(e) => setValues({...values, Gender: e.target.value})} />
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Experience (in years)</label>
                        <div class="control">
                        <input class="input" type="number" id='ExperienceInYears' onChange={(e) => setValues({...values, ExperienceYears: e.target.value})} />
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Age</label>
                        <div class="control">
                        <input class="input" type="number" id='Age' onChange={(e) => setValues({...values, Age: e.target.value})} />
                        </div>
                    </div>
        
                    <Link to='/add-nurse-number'><button class="button is-primary add-nurse-btn">Continue</button></Link>
                </form>
            </div>
        </div>
    )
}

export default AddNurse