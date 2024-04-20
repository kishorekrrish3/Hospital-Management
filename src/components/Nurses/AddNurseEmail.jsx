import React, { useState } from 'react'
import './AddNurseEmail.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddNurseEmail = () => {
    const navigate = useNavigate();

    const [values, setValues] = useState({
        ID: "",
        Email: "",
        NurseID: ""
    })

    function handleAddNurseEmail(e) {
        e.preventDefault()
        axios.post('/add_nurse_email', values)
            .then((res) => {
                // navigate('/home');
                console.log(res);
            })
            .catch((err) => console.log(err));
    }

    return (
        <div className='add-nurse-email'>
            <div className='box add-nurse-email-container'>
                <h1 className='title is-2 add-nurse-email-title'>Add Nurse Email</h1>
                <form className='add-nurse-email-form' onSubmit={handleAddNurseEmail}>
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
                        <label class="label">Nurse ID</label>
                        <div class="control">
                        <input class="input" type="number" id='NurseID' onChange={(e) => setValues({...values, NurseID: e.target.value})} />
                        </div>
                    </div>
        
                    <Link to='/home'><button class="button is-primary add-nurse-email-btn">Submit</button></Link>
                </form>
            </div>
        </div>
    )
}

export default AddNurseEmail