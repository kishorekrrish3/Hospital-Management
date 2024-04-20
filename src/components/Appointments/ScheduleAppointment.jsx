import React, { useState } from 'react'
import './ScheduleAppointment.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ScheduleAppointment = () => {
    const navigate = useNavigate();

    const [values, setValues] = useState({
        ID: "",
        PID: "",
        DocID: "",
        TimeOfAppoint: "",
        DateOfAppoint: "",
        Specialization: ""
    })

    function handleScheduleAppointment(e) {
        e.preventDefault()
        axios.post('/add_appointment', values)
            .then((res) => {
                // navigate('/add-patient-number');
                console.log(res);
            })
            .catch((err) => console.log(err));
    }

    return (
        <div className='schedule-appointment'>
            <div className='box schedule-appointment-container'>
                <h1 className='title is-2 schedule-appointment-title'>Schedule Appointment</h1>
                <form className='schedule-appointment-form' onSubmit={handleScheduleAppointment}>
                    <div class="field">
                        <label class="label">Appointment ID</label>
                        <div class="control">
                        <input class="input" type="number" id='ID' onChange={(e) => setValues({...values, ID: e.target.value})} />
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Patient ID</label>
                        <div class="control">
                        <input class="input" type="number" id='PID' onChange={(e) => setValues({...values, PID: e.target.value})} />
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Doctor ID</label>
                        <div class="control">
                        <input class="input" type="number" id='DocID' onChange={(e) => setValues({...values, DocID: e.target.value})} />
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Time of Appointment</label>
                        <div class="control">
                        <input class="input" type="time" id='TimeOfAppoint' onChange={(e) => setValues({...values, TimeOfAppoint: e.target.value})} />
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Date of Appointment</label>
                        <div class="control">
                        <input class="input" type="date" id='DateOfAppoint' onChange={(e) => setValues({...values, DateOfAppoint: e.target.value})} />
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Specialization</label>
                        <div class="control">
                        <input class="input" type="text" id='Specialization' onChange={(e) => setValues({...values, Specialization: e.target.value})} />
                        </div>
                    </div>

                    <Link to='/home'><button class="button is-primary schedule-appointment-btn">Book</button></Link>
                </form>
            </div>
        </div>
    )
}

export default ScheduleAppointment