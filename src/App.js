import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Home from './components/Home/Home';
import AddPatient from './components/Patients/AddPatient';
import AddPatientNumber from './components/Patients/AddPatientNumber';
import AddDoctor from './components/Doctors/AddDoctor';
import AddPatientEmail from './components/Patients/AddPatientEmail';
import AddDoctorNumber from './components/Doctors/AddDoctorNumber';
import AddDoctorEmail from './components/Doctors/AddDoctorEmail';
import AddMedicalRecord from './components/MedicalRecords/AddMedicalRecord';
import ScheduleAppointment from './components/Appointments/ScheduleAppointment';
import AddLabTest from './components/LabTests/AddLabTest';
import AddPrescription from './components/Prescriptions/AddPrescription';
import GenerateBill from './components/Bills/GenerateBill';
import AddNurse from './components/Nurses/AddNurse';
import AddNurseNumber from './components/Nurses/AddNurseNumber';
import AddNurseEmail from './components/Nurses/AddNurseEmail';
import BookRoom from './components/Rooms/BookRoom';
import AddStaff from './components/Staffs/AddStaff';
import AddStaffNumber from './components/Staffs/AddStaffNumber';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/home" element={<Home />} />
          
          <Route path="/add-patient" element={<AddPatient />} />
          <Route path="/add-patient-number" element={<AddPatientNumber />} />
          <Route path="/add-patient-email" element={<AddPatientEmail />} />

          <Route path="/add-doctor" element={<AddDoctor />} />
          <Route path="/add-doctor-number" element={<AddDoctorNumber />} />
          <Route path="/add-doctor-email" element={<AddDoctorEmail />} />

          <Route path="/add-medical-record" element={<AddMedicalRecord />} />

          <Route path="/schedule-appointment" element={<ScheduleAppointment />} />

          <Route path="/add-lab-test" element={<AddLabTest />} />

          <Route path="/add-prescription" element={<AddPrescription />} />

          <Route path="/generate-bill" element={<GenerateBill />} />

          <Route path="/add-nurse" element={<AddNurse />} />
          <Route path="/add-nurse-number" element={<AddNurseNumber />} />
          <Route path="/add-nurse-email" element={<AddNurseEmail />} />

          <Route path="/book-room" element={<BookRoom />} />

          <Route path="/add-staff" element={<AddStaff />} />
          <Route path="/add-staff-number" element={<AddStaffNumber />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
