import React,{ useState } from 'react'
import './AddDoctor.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
 
const AddDoctor = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    DocID: "",
    FirstName: "",
    MiddleName: "",
    LastName: "",
    Gender: "",
    Specialization: "",
    ExperienceYears: "",
    Age: ""
  });

  function handleSubmit(e) {
    e.preventDefault()
    axios.post('/add_doctor', values)
        .then((res) => {
            // navigate('/home'); 
            console.log(res);
        })
        .catch((err) => console.log(err));
}

    return (
      <div className='add-doctor'>
        <div className='box add-doctor-container'>
        <h1 className='title is-2 add-doctor-title'>Add Doctor</h1>
        <form className='add-doctor-form' onSubmit={handleSubmit}>
          <div class="field">
            <label class="label">Doctor ID</label>
            <div class="control">
            <input class="input" type="number" id='DocID' onChange={(e) => setValues({...values, DocID: e.target.value})} />
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
            <label class="label">Gender</label>
            <div class="control">
            <input class="input" type="text" id='Gender' onChange={(e) => setValues({...values, Gender: e.target.value})} />
            </div>
          </div>
          <div class="field">
            <label class="label">Specialization</label>
            <div class="control">
            <input class="input" type="text" id='Specialization' onChange={(e) => setValues({...values, Specialization: e.target.value})} />
            </div>
          </div>
          <div class="field">
            <label class="label">Experience (in years)</label>
            <div class="control">
            <input class="input" type="number" id='ExperienceYears' onChange={(e) => setValues({...values, ExperienceYears: e.target.value})} />
            </div>
          </div>
          <div class="field">
            <label class="label">Age</label>
            <div class="control">
            <input class="input" type="text" id='Age' onChange={(e) => setValues({...values, Age: e.target.value})} />
            </div>
          </div>
          <Link to='/add-doctor-number'><button class="button is-primary add-doctor-btn">Continue</button></Link>
          </form>
          </div>
      </div>
    )
}

export default AddDoctor