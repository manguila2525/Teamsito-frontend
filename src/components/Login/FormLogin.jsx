import React, { useState, useEffect } from 'react';
import '../../assets/css/loginStyle.css';
const FormLogin = () => {

  const [getUsers, setGetUsers] = useState();


  const [users, setUsers] = useState({})

  const handleInput = (e) => {
    setUsers({
      ...users,
      [e.target.name]: e.target.value
    })
  }

  const sendLogin = (e) => {
    e.preventDefault();
    const userFind = getUsers.filter(user => user.username === users.username && user.password === users.password)
    if (userFind.length === 1) {
      console.log("*** INICIANDO SESION ***")
    }
    if (userFind.length === 0) {
      console.log("*** ERROR EN ALGUN DATO ***")
    }
    e.target.reset()
  }

  //PETICION DE USUARIOS AL SERVIDOR
  const getInfo = async () => {
    let res = await fetch("http://localhost:5000/api/users")
    let data = await res.json()
    setGetUsers(data)
  }

  useEffect(() => {
    getInfo()
  }, [])

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
