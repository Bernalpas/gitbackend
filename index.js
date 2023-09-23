const express = require('express');
const dotenv = require('dotenv');
const userRouter = require('./routes/userRouter');
const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', userRouter);

app.get('/main', (peticion, respuesta) => {

    respuesta.send(`<h1 style="color: red;">Bienvenido a la Aplicación de Ecommerce</h1>`)

    console.log('Cambiamos el texto a rojo y le agregamos un h1');
    console.log(process.env);

})

app.listen(PORT, (err) => {
    if(err) throw err;
    console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`);
});

//123