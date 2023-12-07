import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CodeWarsUserLookup() {
    const [userIn, setUserIn] = useState('');
    const navigate = useNavigate(); 
    
    //react router hook - useNavigate
    const handleSubmit = (subEvent) => {
        subEvent.preventDefault();
        navigate(`/user/${userIn}`);
        
    }

  return (
    <>
      <h1>CodeWars User Lookup</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="usernameIn">Username:</label>
        <input 
            value={userIn}
            onChange={(e) => setUserIn(e.target.value)}
            type="text" 
            name="usernameIn" 
            id="usernameIn" 
        />
        <button type="submit">Lookup</button>
      </form>
    </>
  );
}
