const handleErrorLogin = (data) => {
  if (data.error) {
    console.log(`Existe el error ${data.error}`)
  }
  if (data.user) {
    console.log(`Ingresando ${data.user.nombre}`)
  }
}

module.exports = { handleErrorLogin }