import { useState } from 'react';
import { login } from '../../Utilities/users-service';
import './LoginForm.css'

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState('');


  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const user = await login(credentials);
      this.props.setUserInState(user);
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <div>
      <div className="form-container" >
        <h3>Please Login Below</h3>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>Email</label>
          <input type="text" name="email" value={credentials.email} onChange={handleChange} required />
          <label>Password</label>
          <input type="password" name="password" value={credentials.password} onChange={handleChange} required /><br></br><br></br>
          <button type="submitBtn">LOG IN</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}