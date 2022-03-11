import { useState } from 'react';
import './AuthPage.css';
import LoginForm from '../../components/LogInForm/LogInForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

export default function AuthPage(props) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main className="AuthPage">
      {showLogin ? <LoginForm setUser={props.setUser} setUserInState={props.setUserInState}/> : <SignUpForm setUser={props.setUser} setUserInState={props.setUserInState}/>}
      <div>
        <button onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'Click Here to Sign Up' : 'Click Here to Log In'}</button>
      </div>
    </main>
  );
}