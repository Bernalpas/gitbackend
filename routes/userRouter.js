

//hola
//hi

const express = require('express');
const router = express.Router();


router.get('/', (peticion, respuesta) => {

    respuesta.send(`<h1 style="color: red;">Bienvenido a la Aplicación de Ecommerce</h1>`)

    console.log('Cambiamos el texto a rojo y le agregamos un h1');

})

router.post('/', (req, res) => {

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


module.exports = router;
