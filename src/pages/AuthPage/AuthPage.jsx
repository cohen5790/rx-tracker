import { useState } from 'react';
import './AuthPage.css';
import LoginForm from '../../components/LogInForm/LogInForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main className="AuthPage">
      {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
      <div>
        <button onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'Click Here to Sign Up' : 'Click Here to Log In'}</button>
      </div>
    </main>
  );
}