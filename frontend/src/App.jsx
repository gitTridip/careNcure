import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Header from './layout/Header';
import Footer from './layout/Footer';
import WorkInProgress from './pages/WorkInprogress';
import Appointment from './pages/Appointment';
import BedAvailability from './pages/BedAvailability';
import Doctors from './pages/Doctors';
import LoginRegisterPage from './pages/LoginRegisterPage';

// js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import UserProfile from './pages/UserProfile';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<Home />} />
          <Route path='doctors' element={<Doctors />} />
          <Route path='appointment' element={<Appointment />} />
          <Route path='appointment' element={<Appointment />} />
          <Route path='bed-availability' element={<BedAvailability />} />
          <Route path='my-profile' element={<UserProfile />} />
          <Route path='*' element={<WorkInProgress />} />
          <Route path='*' element={<WorkInProgress />} />
        </Route>
        <Route path='sign' element={<LoginRegisterPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
