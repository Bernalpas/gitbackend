/* The code you provided is setting up a basic Express server in Node.js. */

const express = require('express');
const dotenv = require('dotenv');
const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (peticion, respuesta) => {

    respuesta.send(`<h1 style="color: red;">Bienvenido a la Aplicación de Ecommerce</h1>`)

    console.log('Cambiamos el texto a rojo y le agregamos un h1');

})


app.post('/', (req, res) => {

    //console.log(req);

    console.log(req.url);

    console.log(req.method);

    console.log(req.body);

    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const email = req.body.email;
    const telefono = req.body.telefono;

    console.log(nombre);

    console.log('Cambiamos el texto a rojo y le agregamos un h1');

    res.send(`<h1 style="color: red;">Bienvenido ${nombre} a la Aplicación de Ecommerce</h1>`)

})


app.get('/', (peticion, respuesta) => {

    respuesta.send(`<h1 style="color: red;">Bienvenido a la Aplicación de Ecommerce</h1>`)

    console.log('Cambiamos el texto a rojo y le agregamos un h1');

})



app.get('/', (peticion, respuesta) => {

    respuesta.send(`<h1 style="color: red;">Bienvenido a la Aplicación de Ecommerce</h1>`)

    console.log('Cambiamos el texto a rojo y le agregamos un h1');

})


app.get('/', (peticion, respuesta) => {

    respuesta.send(`<h1 style="color: red;">Bienvenido a la Aplicación de Ecommerce</h1>`)

    console.log('Cambiamos el texto a rojo y le agregamos un h1');

})



app.listen(PORT, (err) => {
    if(err) throw err;

    console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`);

});

//123