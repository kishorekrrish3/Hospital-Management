import React, { useState } from 'react'
import './BookRoom.css' 
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const BookRoom = () => {
    const navigate = useNavigate();

    const [values, setValues] = useState({
        RoomNo: "",
        PID: "",
        FromDate: "",
        ToDate: "",
        RoomType: "",
        NurseID: ""
    })

    function handleBookRoom(e) {
        e.preventDefault()
        axios.post('/book_room', values)
            .then((res) => {
                // navigate('/home');
                console.log(res);
            })
            .catch((err) => console.log(err));
    }

    return (
        <div className='book-room'>
            <div className='box book-room-container'>
                <h1 className='title is-2 book-room-title'>Book Room</h1>
                <form className='book-room-form' onSubmit={handleBookRoom}>
                    <div class="field">
                        <label class="label">Room Number</label>
                        <div class="control">
                        <input class="input" type="number" id='RoomNo' onChange={(e) => setValues({...values, RoomNo: e.target.value})} />
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Patient ID</label>
                        <div class="control">
                        <input class="input" type="number" id='PID' onChange={(e) => setValues({...values, PID: e.target.value})} />
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">From Date</label>
                        <div class="control">
                        <input class="input" type="date" id='FromDate' onChange={(e) => setValues({...values, FromDate: e.target.value})} />
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">To Date</label>
                        <div class="control">
                        <input class="input" type="date" id='ToDate' onChange={(e) => setValues({...values, ToDate: e.target.value})} />
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Room Type</label>
                        <div class="control">
                        <input class="input" type="text" id='RoomType' onChange={(e) => setValues({...values, RoomType: e.target.value})} />
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Nurse ID</label>
                        <div class="control">
                        <input class="input" type="number" id='NurseID' onChange={(e) => setValues({...values, NurseID: e.target.value})} />
                        </div>
                    </div>
        
                    <Link to='/home'><button class="button is-primary book-room-btn">Book</button></Link>
                </form>
            </div>
        </div>
    )
}

export default BookRoom