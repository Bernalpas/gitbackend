const express = require('express');
const dotenv = require('dotenv');
const userRouter = require('./routes/userRouter');
const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', userRouter);

app.listen(PORT, (err) => {
    if(err) throw err;
    console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`);
});

//123