import React, { useState } from 'react'
import './GenerateBill.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const GenerateBill = () => {
    const navigate = useNavigate();

    const [values, setValues] = useState({
        BillNo: "",
        PID: "",
        TimeOfBill: "",
        DateOfBill: "",
        Amount: ""
    })

    function handleGenerateBill(e) {
        e.preventDefault()
        axios.post('/add_bill', values)
            .then((res) => {
                // navigate('/home');
                console.log(res);
            })
            .catch((err) => console.log(err));
    }

    return (
        <div className='generate-bill'>
            <div className='box generate-bill-container'>
                <h1 className='title is-2 generate-bill-title'>Generate Bill</h1>
                <form className='generate-bill-form' onSubmit={handleGenerateBill}>
                    <div class="field">
                        <label class="label">Bill Number</label>
                        <div class="control">
                        <input class="input" type="number" id='BillNo' onChange={(e) => setValues({...values, BillNo: e.target.value})} />
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Patient ID</label>
                        <div class="control">
                        <input class="input" type="number" id='PID' onChange={(e) => setValues({...values, PID: e.target.value})} />
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Time of Bill</label>
                        <div class="control">
                        <input class="input" type="time" id='TimeOfBill' onChange={(e) => setValues({...values, TimeOfBill: e.target.value})} />
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Date of Bill</label>
                        <div class="control">
                        <input class="input" type="date" id='DateOfBill' onChange={(e) => setValues({...values, DateOfBill: e.target.value})} />
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Amount</label>
                        <div class="control">
                        <input class="input" type="number" id='Amount' onChange={(e) => setValues({...values, Amount: e.target.value})} />
                        </div>
                    </div>
        
                    <Link to='/home'><button class="button is-primary generate-bill-btn">Submit</button></Link>
                </form>
            </div>
        </div>
    )
}

export default GenerateBill