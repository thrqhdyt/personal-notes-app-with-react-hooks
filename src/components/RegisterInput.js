import React from "react";
import PropTypes from 'prop-types';
import useInput from "../hooks/useInput";

function RegisterInput({ register }) {
  const [ name, onNameChange ] = useInput('');
  const [ email, onEmailChange ] = useInput('');
  const [ password, onPasswordChange ] = useInput('');

  const onSubmitHandler = (event) => {
    event.preventDefault();

    register({
      name: name,
      email: email,
      password: password
    })
    
  }

  return (
          <form onSubmit={onSubmitHandler} className="input-register">
            <label>Name</label>
            <input type="text" id="name" value={name} onChange={onNameChange}/>
            <label>Email</label>
            <input type="email" id="email" value={email} onChange={onEmailChange}/>
            <label>Password</label>
            <input type="password" id="password" value={password} onChange={onPasswordChange} />
            <button>Register</button>
          </form>
  )
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired
}

export default RegisterInput;