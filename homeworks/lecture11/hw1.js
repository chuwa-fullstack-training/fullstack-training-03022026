const express = require('express');
const mongoose = require('mongoose');

const companyRoutes = require('./routes/companies');
const employeeRoutes = require('./routes/employees');
const authRoutes = require('./routes/auth');


const app = express();
// easy to forget
// This middleware parses JSON request bodies, then we can access the data with req.body
app.use(express.json());

// Use the real connection string for executing
mongoose.connect('mongodb+srv://********/?appName=Cluster0')
    .then(() => {
        console.log('MongoDB connected');
    })
    .catch((error) => {
        console.log('MongoDB connection error:', error);
    });

// mount the routers
app.use('/companies', companyRoutes);
app.use('/employees', employeeRoutes);
app.use('/api', authRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});