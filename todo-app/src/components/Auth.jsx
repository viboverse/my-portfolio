import { useContext, useRef } from "react";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation";
import { AuthContext } from "../context/AuthContext";
import { ErrorContext } from "../context/ErrorContext";

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
      setError("Email can not be empty!");
      return;
    }

    if (!isEmail(enteredEmail)) {
      setError("Email is not valid!");
      return;
    }

    if (!isNotEmpty(enteredPassword) || !hasMinLength(enteredPassword, 6)) {
      setError("You must provide a password with at least six characters.");
      return;
    }

    login();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email:
        <input type="text" id="email" ref={email} required />
      </label>
      <label htmlFor="password">
        Password:
        <input type="text" id="password" ref={password} required />
      </label>

      <div>
        <button type="reset">Reset</button>
        <button>Login</button>
      </div>
    </form>
  );
}

export default Auth;
