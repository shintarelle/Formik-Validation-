import React from 'react';
import './App.css';
import RegistrationForm from './components/RegistrationForm';


function App() {
  return (
    <>
      <h1>Registration Form with Formik and Yup</h1>
      <div className="form-wrapper">
        <RegistrationForm />
      </div>
    </>
  );
}

export default App;
