import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import '../../assets/css/loginStyle.css';
import { handleLogin } from '../../helpers/handleLogin';
const FormLogin = () => {

  const [users, setUsers] = useState({})
  const [getUser, setGetUser] = useState(null);



  //MANEJADOR DE INPUTS
  const handleInput = (e) => {
    setUsers({
      ...users,
      [e.target.name]: e.target.value
    })
  }

  //PETICION AL SERVIDOR DE AUTENTICACION
  const sendLogin = async (e) => {
    e.preventDefault();
    let { data } = await axios.post("http://localhost:5000/auth/login", users)
    handleLogin(data, Navigate)
    setGetUser(data)
    console.log(data)
    e.target.reset()
  }

  return (
    <div className="form">

      <form onSubmit={sendLogin} className="form__group">
        <div className="form__control">
          <input type="text" placeholder="Username" name="username" onChange={handleInput} autoFocus />
        </div>
        <div className="form__control">
          <input type="password" name="password" onChange={handleInput} placeholder="Password" />
        </div>
        <div className="form__control">
          <button type="submit">Ingresar</button>
        </div>
      </form>
    </div>
  );
}

export default FormLogin;
