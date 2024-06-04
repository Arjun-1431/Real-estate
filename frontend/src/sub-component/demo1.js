import React, { useState } from 'react';
import axios from 'axios';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contect, setContect] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [personId, setPersonId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/createUser', {
        name,
        email,
        password,
        contect,
        isAdmin
      });
      const { message } = response.data;
      // Assuming the response also includes the personId
      setPersonId(response.data.personId);
      alert(message); // Show success message or handle it as needed
    } catch (error) {
      alert('Error registering user: ' + error.message); // Show error message or handle it as needed
    }
  };

  return (
    <div style={{marginTop:80}}>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <input type="text" value={contect} onChange={(e) => setContect(e.target.value)} placeholder="Contact" />
        <label>
          Admin:
          <input type="checkbox" checked={isAdmin} onChange={(e) => setIsAdmin(e.target.checked)} />
        </label>
        <button type="submit">Register</button>
      </form>
      {personId && <p>Person ID: {personId}</p>} {/* Display personId if available */}
    </div>
  );
};

export default RegisterForm;
