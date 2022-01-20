// import { Navigate } from 'react-router-dom';
const handleLogin = (data, Navigate) => {
  if (data.error) {
    console.log(`Existe el error ${data.error}`)
  }
  if (data.user) {
    console.log(`Ingresando ${data.user.nombre}`)
    window.localStorage.setItem(
      'loggedSystemTeamsito', `Bearer ${data.token}`
    )
    const loggedUserToken = window.localStorage.getItem('loggedSystemTeamsito')
    if (loggedUserToken.split(' ')[1] !== undefined) {
      console.log("ok")
      window.location.href = "http://localhost:3000/"
    }
    // return <Navigate to="/dashboard" />
  }
}

module.exports = { handleLogin }