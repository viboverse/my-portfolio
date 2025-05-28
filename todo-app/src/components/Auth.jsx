import { useContext, useRef } from 'react';
import { isEmail, isNotEmpty, hasMinLength } from '../util/validation';
import { AuthContext } from '../context/AuthContext';
import { ErrorContext } from '../context/ErrorContext';
import Input from './Input';

function Auth() {
  const { login } = useContext(AuthContext);
  const { setError } = useContext(ErrorContext);

  const email = useRef();
  const password = useRef();

  function handleSubmit(event) {
    event.preventDefault();

    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;

    if (!isNotEmpty(enteredEmail)) {
      setError('Email can not be empty!');
      return;
    }

    if (!isEmail(enteredEmail)) {
      setError('Email is not valid!');
      return;
    }

    if (!isNotEmpty(enteredPassword) || !hasMinLength(enteredPassword, 6)) {
      setError('You must provide a password with at least six characters.');
      return;
    }

    login(enteredEmail);
  }

  return (
    <div className="auth-page-center">
      <div className="auth-welcome">
        <h1>Welcome to My Project Manager App</h1>
        <p className="auth-sub">Organize your projects and tasks with ease.</p>
      </div>
      <form className="auth-form" onSubmit={handleSubmit}>
        <Input label="Email:" type="text" id="email" ref={email} />

        <Input label="Password:" type="password" id="password" ref={password} required />

        <div className="auth-btns">
          <button>Login</button>
          <button type="reset">Reset</button>
        </div>
      </form>
    </div>
  );
}

export default Auth;
