import React, { useState } from 'react';
import axios from 'axios';

function SubmitData() {
  const [name, setName] = useState('');
  const [userId, setuserId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const userId = "aljsdjfgfhdfg";
      // Send data to the Spring Boot backend
      const response = await axios.get("/saveuser/"+"/"+userId+"/"+name);
      setName(" ");
      setuserId(" ");
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handleInputchange2 = (e)=>{
    setuserId(e.target.value);
  }

  return (
    <div>
      <h1>Submit Data to Spring Boot</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter Your Name:
          <input type="text" value={name} onChange={handleInputChange} />
          <input type="text" value={userId} onChange={handleInputchange2} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SubmitData;
