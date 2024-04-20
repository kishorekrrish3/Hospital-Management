import React,{ useState } from 'react'
import './AddStaff.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
 
const AddStaff = () => {
    const navigate = useNavigate();

    const [values, setValues] = useState({
        SID: "",
        FirstName: "",
        MiddleName: "",
        LastName: "",
        Designation: "",
        Gender: "",
        Salary: "",
        Age: ""
    });

    function handleAddStaff(e) {
        e.preventDefault()
        axios.post('/add_staff', values)
            .then((res) => {
                // navigate('/add-staff-number'); 
                console.log(res);
            })
            .catch((err) => console.log(err));
    }

    return (
      <div className='add-staff'>
        <div className='box add-staff-container'>
        <h1 className='title is-2 add-staff-title'>Add Staff</h1>
        <form className='add-staff-form' onSubmit={handleAddStaff}>
          <div class="field">
            <label class="label">Staff ID</label>
            <div class="control">
            <input class="input" type="number" id='SID' onChange={(e) => setValues({...values, SID: e.target.value})} />
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
            <input class="input" type="text" id='Last Name' onChange={(e) => setValues({...values, LastName: e.target.value})} />
            </div>
          </div>
          <div class="field">
            <label class="label">Designation</label>
            <div class="control">
            <input class="input" type="text" id='Designation' onChange={(e) => setValues({...values, Designation: e.target.value})} />
            </div>
          </div>
          <div class="field">
            <label class="label">Gender</label>
            <div class="control">
            <input class="input" type="text" id='Gender' onChange={(e) => setValues({...values, Gender: e.target.value})} />
            </div>
          </div>
          <div class="field">
            <label class="label">Salary</label>
            <div class="control">
            <input class="input" type="number" id='Salary' onChange={(e) => setValues({...values, Salary: e.target.value})} />
            </div>
          </div>
          <div class="field">
            <label class="label">Age</label>
            <div class="control">
            <input class="input" type="text" id='Age' onChange={(e) => setValues({...values, Age: e.target.value})} />
            </div>
          </div>
          <Link to='/add-staff-number'><button class="button is-primary add-staff-btn">Continue</button></Link>
          </form>
          </div>
      </div>
    )
}

export default AddStaff