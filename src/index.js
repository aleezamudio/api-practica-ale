const Contenedor = require('./Contenedor.js')

const userService= new Contenedor();

let user={
    first_name: "Alejandro",
    last_name: "Zamudio",
    age: 22,
    mail: "miCorreo@gmail.com",
    phone_number: "12345678910",
    direction: "calle falsa 123",
    nationality: "argentina",
    civil_status: "soltero",
    gender: "masculino",
    date_of_birth: "16/10/1999"
 }
//CREATE
userService.createUser(user).then(result=>console.log(result))

//READ ALL
// userService.getAll().then(result=>console.log(result))

//READ BY ID
// userService.getById(2).then(result=>console.log(result));

//UPDATE

// userService.updateUser(1,user).then(result=>console.log(result))

//DELETE BY ID
// userService.deleteById(2).then(result=>console.log(result))

//DELETE ALL
//userService.deleteAll(user).then(result=>console.log(result))