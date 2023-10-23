import React, { useState } from 'react';

function C1() {
  // State to store the birth date and calculated age
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState('');

  // Function to calculate the age
  const calculateAge = () => {
    // Convert the birth date and today's date to Date objects
    const birth = new Date(birthDate);
    const today = new Date();

    // Calculate the age based on the birth date
    let calculatedAge = today.getFullYear() - birth.getFullYear();

    // Check if the birthday has occurred this year
    if (
      today.getMonth() < birth.getMonth() ||
      (today.getMonth() === birth.getMonth() && today.getDate() < birth.getDate())
    ) {
      calculatedAge--;
    }

    // Set the age in the state
    setAge(calculatedAge);
  };

  return (
    <div>
      <center>
        <h1>Age Calculator</h1>
        <h4>Enter your date of birth</h4>
        <input
          type="date"
          placeholder="Enter your Date of birth"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        />
        <br /><br />
        <button
          style={{
            background: 'blue',
            color: 'white',
            width: '100px',
            height: '30px',
            borderRadius: '15px',
          }}
          onClick={calculateAge}
        >
          Calculate Age
        </button>
        <br />
        <h3 id="i1">{age !== '' ? `Your age is ${age} years.` : ''}</h3>
      </center>
    </div>
  );
}

export default C1;