import { useContext, useRef } from "react";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation";
import { AuthContext } from "../context/auth-context";

function Authentication() {
  const { login } = useContext(AuthContext);
  const email = useRef();
  const password = useRef();

  function handleSubmit(event) {
    event.preventDefault();

    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;

    if (!isNotEmpty(enteredEmail)) {
      throw new Error("Email can not be empty!");
    }

    if (!isEmail(enteredEmail)) {
      throw new Error("Email is not valid!");
    }

    if (!isNotEmpty(enteredPassword) || !hasMinLength(enteredPassword, 6)) {
      throw new Error(
        "You must provide a password with at least six characters."
      );
    }

    login();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email:
        <input type="text" id="email" ref={email} />
      </label>
      <label htmlFor="password">
        Password:
        <input type="text" id="password" ref={password} />
      </label>

      <div>
        <button type="reset">Reset</button>
        <button>Login</button>
      </div>
    </form>
  );
}

export default Authentication;
