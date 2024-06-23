const { AdminModel } = require("../models/adminModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const { NurseModel } = require("../models/nurseModel");
const { DoctorModel } = require("../models/doctorModel");
const { PatientModel } = require("../models/patientModel");


const getAdmin = async (req, res) => {
    try {
        const admins = await AdminModel.find();
        res.status(200).send(admins);
    } catch (error) {
        console.log(error);
        res.status(400).send({ error: "Something went wrong" });
    }
}

const adminRegister = async (req, res) => {
    const { email } = req.body;
    try {
        const admin = await AdminModel.findOne({ email });
        if (admin) {
            return res.send({
                message: "Admin already exists",
            });
        }
        let value = new AdminModel(req.body);
        await value.save();
        const data = await AdminModel.findOne({ email });
        return res.send({ data, message: "Registered" });
    } catch (error) {
        res.send({ error, message: "Error in admin Register" });
    }
}

const adminLogin = async (req, res) => {
    const { adminID, password } = req.body;
    try {
        const admin = await AdminModel.findOne({ adminID, password });

        if (admin) {
            const token = jwt.sign({ foo: "bar" }, process.env.KEY, {
                expiresIn: "24h",
            });
            res.send({ message: "Successful", user: admin, token: token });
        } else {
            res.send({ message: "Wrong credentials" });
        }
    } catch (error) {
        console.log({ message: "Error in admin Login" });
        console.log(error);
    }
}

const updateAdmin = async (req, res) => {
    const id = req.params.adminId;
    const payload = req.body;
    try {
        const admin = await AdminModel.findByIdAndUpdate({ _id: id }, payload);
        if (!admin) {
            res.status(404).send({ msg: `Admin with id ${id} not found` });
        }
        res.status(200).send(`Admin with id ${id} updated`);
    } catch (error) {
        console.log(error);
        res.status(400).send({ error: "Something went wrong, unable to Update." });
    }
}

const deleteAdmin = async (req, res) => {
    const id = req.params.adminId;
    try {
        const admin = await AdminModel.findByIdAndDelete({ _id: id });
        if (!admin) {
            res.status(404).send({ msg: `Admin with id ${id} not found` });
        }
        res.status(200).send(`Admin with id ${id} deleted`);
    } catch (error) {
        console.log(error);
        res.status(400).send({ error: "Something went wrong, unable to Delete." });
    }
}

const sendEmail = (req, res) => {
    const { email, userId, password } = req.body;

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "2021csb1128@iitrpr.ac.in",
            pass: process.env.PASSWORD,
        },
    });

    const mailOptions = {
        from: "2021csb1128@iitrpr.ac.in",
        to: email,
        subject: "Account ID and Password",
        text: `This is your User Id : ${userId} and  Password : ${password} .`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.send(error);
        }
        return res.send("Password reset email sent");
    });
}

const forgotPassword = async (req, res) => {
    const { email, type } = req.body;
    let user;
    let userId;
    let password;

    if (type == "nurse") {
        user = await NurseModel.find({ email });
        userId = user[0]?.nurseID;
        password = user[0]?.password;
    }
    if (type == "patient") {
        user = await PatientModel.find({ email });
        userId = user[0]?.nurseID;
        password = user[0]?.password;
    }

    if (type == "admin") {
        user = await AdminModel.find({ email });
        userId = user[0]?.adminID;
        password = user[0]?.password;
    }

    if (type == "doctor") {
        user = await DoctorModel.find({ email });
        userId = user[0]?.docID;
        password = user[0]?.password;
    }

    if (!user) {
        return res.send({ message: "User not found" });
    }

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "2021csb1128@iitrpr.ac.in",
            pass: process.env.PASSWORD,
        },
    });

    const mailOptions = {
        from: "2021csb1128@iitrpr.ac.in",
        to: email,
        subject: "Account ID and Password",
        text: `This is your User Id : ${userId} and  Password : ${password} .`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.send(error);
        }
        return res.send("Password reset email sent");
    });
}

module.exports = {
    getAdmin,
    adminRegister,
    adminLogin,
    updateAdmin,
    deleteAdmin,
    sendEmail,
    forgotPassword
};