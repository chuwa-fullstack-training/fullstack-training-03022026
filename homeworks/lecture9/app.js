const express = require('express');
const mongoose = require('mongoose');
const app = express();

// middlewales 
app.use(express.json());

// connecting to the MongoDB database
mongoose.connect('mongodb://localhost:27017/companyDB')
.then(() => console.log('Connected to MongoDB'))
.catch(err =>console.log('Failed to connect to MongoDB', err));

// routers
const companyRouter = require('./routers/companyRouters');
const employeeRouter = require('./routers/employeeRouters');
app.use('/companies', companyRouter);
app.use('/employees', employeeRouter);

// start the server
const PORT = 3000;
app.listen(PORT, () => {console.log(`Server is running on: ${PORT}`)});