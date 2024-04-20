import React, { useState } from 'react'
import './AddLabTest.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddLabTest = () => {
    const navigate = useNavigate();

    const [values, setValues] = useState({
        TestID: "",
        PID: "",
        TestType: "",
        Results: "",
        DocID: "",
        TestDate: ""
    })

    function handleAddLabTest(e) {
        e.preventDefault()
        axios.post('/add_lab_test', values)
            .then((res) => {
                // navigate('/home');
                console.log(res);
            })
            .catch((err) => console.log(err));
    }

    return (
        <div className='add-lab-test'>
            <div className='box add-lab-test-container'>
                <h1 className='title is-2 add-lab-test-title'>Add Lab Test</h1>
                <form className='add-lab-test-form' onSubmit={handleAddLabTest}>
                    <div class="field">
                        <label class="label">Test ID</label>
                        <div class="control">
                        <input class="input" type="number" id='PID' onChange={(e) => setValues({...values, TestID: e.target.value})} />
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Patient ID</label>
                        <div class="control">
                        <input class="input" type="number" id='PID' onChange={(e) => setValues({...values, PID: e.target.value})} />
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Test Type</label>
                        <div class="control">
                        <input class="input" type="text" id='TestType' onChange={(e) => setValues({...values, TestType: e.target.value})} />
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Results</label>
                        <div class="control">
                        <input class="input" type="text" id='Results' onChange={(e) => setValues({...values, Results: e.target.value})} />
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Doctor ID</label>
                        <div class="control">
                        <input class="input" type="number" id='DocID' onChange={(e) => setValues({...values, DocID: e.target.value})} />
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Test Date</label>
                        <div class="control">
                        <input class="input" type="date" id='TestDate' onChange={(e) => setValues({...values, TestDate: e.target.value})} />
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

                    <Link to='/home'><button class="button is-primary add-lab-test-btn">Submit</button></Link>
                </form>
            </div>
        </div>
    )
}

export default AddLabTest