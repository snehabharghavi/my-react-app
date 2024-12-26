import React, { useState } from 'react';

function Register() {
  const [fullName, setFullName] = useState(''); 
  const [emailAddress, setEmailAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [country, setCountry] = useState('');
  const [modeOfTraining, setModeOfTraining] = useState('');
  const [onlineTrainingCourse, setOnlineTrainingCourse] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:');
    console.log('Full Name:', fullName);
    console.log('Email Address:', emailAddress);
    console.log('Phone Number:', phoneNumber);
    console.log('Whatsapp Number:', whatsappNumber);
    console.log('Country:', country);
    console.log('Mode of Training:', modeOfTraining);
    console.log('Online Training Course:', onlineTrainingCourse);
  };

  return (
    <div className="enquire-now">
      <h1>Enquire Now</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name*: 
          <input
            type="text"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
            required
          />
        </label>
        <br />
        <br/>
        <label>
          Email Address*:
          <input
            type="email"
            value={emailAddress}
            onChange={(event) => setEmailAddress(event.target.value)}
            required
          />
        </label>
        <br />
        <br/>
        <label>
          Phone Number*:
          <input
            type="tel"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
            required
          />
        </label>
        <br />
        <br/>
        <label>
          Whatsapp Number*:
          <input
            type="tel"
            value={whatsappNumber}
            onChange={(event) => setWhatsappNumber(event.target.value)}
            required
          />
        </label>
        <br />
        <br/>
        <label>
          Country*:
          <select
            value={country}
            onChange={(event) => setCountry(event.target.value)}
            required
          >
            <option value="">Select Country</option>
            <option value="India">INDIA</option>
            <option value="usa">USA</option>
            <option value="uk">UK</option>

          </select>
        </label>
        <br />
        <br/>
        <label>
          Mode of Training*:
          <select
            value={modeOfTraining}
            onChange={(event) => setModeOfTraining(event.target.value)}
            required
          >
            <option value="">Select Mode of Training</option>
            <option value="online">Online</option>
            <option value="ofline">Ofline</option>
          </select>
        </label>
        <br />
        <br/>
        <label>
          Online Training Course*:
          <select
            value={onlineTrainingCourse}
            onChange={(event) => setOnlineTrainingCourse(event.target.value)}
            required
          >
            <option value="">Select Online Training Course</option>
            <option value="SAP ABAP WITH HANA">SAP ABAP WITH HANA</option>
            <option value="Power bi">Power bi</option>


          </select>
        </label>
        <br />
        <br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Register ;
