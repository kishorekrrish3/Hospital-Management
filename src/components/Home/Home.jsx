import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
      <div className='signup'>
        <h1 className='title is-2 signup-title'>Home</h1>
        <div class='box home-container'>
          <Link to='/add-patient'><button class='button is-info home-btn'>Add Patient Details</button></Link>
          <Link to='/add-doctor'><button class='button is-info home-btn'>Add Doctor Details</button></Link>
          <Link to='/add-medical-record'><button class='button is-info home-btn'>Add Medical Record</button></Link>
          <Link to='/schedule-appointment'><button class='button is-info home-btn'>Schedule Appointment</button></Link>
          <Link to='/add-lab-test'><button class='button is-info home-btn'>Add Lab Test</button></Link>
          <Link to='/add-prescription'><button class='button is-info home-btn'>Add Prescription</button></Link>
          <Link to='/generate-bill'><button class='button is-info home-btn'>Generate Bill</button></Link>
          <Link to='/add-nurse'><button class='button is-info home-btn'>Add Nurse Details</button></Link>
          <Link to='/book-room'><button class='button is-info home-btn'>Book Room</button></Link>
          <Link to='/add-staff'><button class='button is-info home-btn'>Add Staff</button></Link>
        </div>
      </div>
    )
} 

export default Home