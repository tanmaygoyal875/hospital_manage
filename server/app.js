const express = require('express')
const {dbConnect} = require('./config/db')
require("dotenv").config()
const cors = require("cors");

const adminRouter = require('./routes/Admins')
const ambulanceRouter = require("./routes/Ambulances");
const appointmentRouter = require("./routes/Appointments");
const bedRouter = require("./routes/Beds");
const doctorRouter = require("./routes/Doctors");
const hospitalRouter = require("./routes/Hospitals");
const nurseRouter = require("./routes/Nurses");
const patientRouter = require("./routes/Patients");
const paymentRouter = require("./routes/Payments");
const prescriptionRouter = require("./routes/Prescriptions");
const reportRouter = require("./routes/Reports");

const app = express()

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Homepage");
});

app.use('/admin',adminRouter);
app.use("/ambulances", ambulanceRouter);
app.use("/appointments", appointmentRouter);
app.use("/beds", bedRouter);
app.use("/doctors", doctorRouter);
app.use("/hospitals", hospitalRouter);
app.use("/nurses", nurseRouter);
app.use("/patients", patientRouter);
app.use("/payments", paymentRouter);
app.use("/prescriptions", prescriptionRouter);
app.use("/reports", reportRouter);


app.listen(process.env.PORT, async () => {
    try {
      await dbConnect;
      console.log("Connected to DB");
    } catch (error) {
      console.log("Unable to connect to DB");
      console.log(error);
    }
    console.log(`Listening at port ${process.env.PORT}`);
  });