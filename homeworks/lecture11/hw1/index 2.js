const express = require('express');
const employeeRouter = require('./routers/employees');
const companyRouter = require('./routers/companies');
const authRouter = require('./routers/auth');
const connectDB = require('./db');
const app = express();
const port = 3000;

connectDB();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api',authRouter);
app.use('/employees', employeeRouter);
app.use('/companies',companyRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
