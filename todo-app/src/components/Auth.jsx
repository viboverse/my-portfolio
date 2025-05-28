import { useContext, useRef } from 'react';
import { isEmail, isNotEmpty, hasMinLength } from '../util/validation';
import { AuthContext } from '../context/AuthContext';
import { ErrorContext } from '../context/ErrorContext';
import Input from './Input';

function Auth() {
  const { login, setUsername } = useContext(AuthContext);
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

    setUsername(enteredEmail);

    login();
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input label="Email:" type="email" id="email" ref={email} required />

      <Input label="Password:" type="password" id="password" ref={password} required />

      <div>
        <button type="reset">Reset</button>
        <button>Login</button>
      </div>
    </form>
  );
}

export default Auth;
