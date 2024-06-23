import React, { useState } from "react";
import { message, Upload } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
    AddPatients,
    CreateBeds,
    EditSingleBed,
    GetSingleBed,
} from "../../../Redux/Datas/action"

import Sidebar from "../Common/Sidebar";
import { Navigate } from "react-router-dom";
const notify = (text) => toast(text);

const AddPatient = () => {

    const getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener("load", () => callback(reader.result));
        reader.readAsDataURL(img);
    };

    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();

    const { data } = useSelector((store) => store.auth);

    const beforeUpload = (file) => {
        const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
        if (!isJpgOrPng) {
            message.error("You can only upload JPG/PNG file!");
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error("Image must smaller than 2MB!");
        }
        return isJpgOrPng && isLt2M;
    };

    const initBed = {
        bedNumber: "",
        roomNumber: "",
    };
    const [bedDetails, setbedDetails] = useState(initBed);

    const HandleBedchange = (e) => {
        setbedDetails({ ...bedDetails, [e.target.name]: e.target.value });
    };

    const InitData = {
        patientName: "",
        patientID: Date.now(),
        age: "",
        email: "",
        gender: "",
        mobile: "",
        disease: "",
        address: "",
        department: "",
        date: "",
        bloodGroup: "",
        DOB: "",
        password: "",
        nurseID: data?.user._id,
        docID: "",
        details: "",
    };
    const [AddPatient, setAddPatient] = useState(InitData);

    const HandleAppointment = (e) => {
        setAddPatient({ ...AddPatient, [e.target.name]: e.target.value });
    };

    const HandleOnsubmitAppointment = (e) => {
        e.preventDefault();

        if (
            AddPatient.gender === "" ||
            AddPatient.department === "" ||
            AddPatient.docID === "" ||
            AddPatient.bloodGroup === ""
        ) {
            return notify("Please Enter All the Requried Feilds");
        }
        try {
            setLoading(true);
            dispatch(GetSingleBed(bedDetails)).then((res) => {
                if (res.message === "Bed not found") {
                    setLoading(false);
                    return notify("Bed not found");
                }
                if (res.message === "Occupied") {
                    setLoading(false);
                    return notify("Bed already occupied");
                }
                if (res.message === "No Bed") {
                    setLoading(false);
                    return notify("Bed not found");
                }
                if (res.message === "Available") {
                    dispatch(AddPatients(AddPatient)).then((item) => {
                        if (item.message === "Patient already exists") {
                            setLoading(false);
                            return notify("Patient already exists");
                        }
                        let data = {
                            patientID: item._id,
                            occupied: "occupied",
                        };
                        notify("Patient Added");

                        dispatch(EditSingleBed(data, res.id)).then((ele) =>
                            console.log(ele)
                        );
                        notify("Bed updated");
                        setLoading(false);
                        setAddPatient(InitData);
                        setbedDetails(initBed);
                    });
                } else {
                    setLoading(false);
                    console.log("error");
                }
            });
            //
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };

    // const handleChange = (info) => {
    //   if (info.file.status === "uploading") {
    //     setLoading(true);
    //     return;
    //   }
    //   if (info.file.status === "done") {
    //     // Get this url from response in real world.
    //     getBase64(info.file.originFileObj, (url) => {
    //       setLoading(false);
    //       setImageUrl(url);
    //     });
    //   }
    // };

    // const uploadButton = (
    //   <div>
    //     {loading ? <LoadingOutlined /> : <PlusOutlined />}
    //     <div style={{ marginTop: 8 }}>Upload</div>
    //   </div>
    // );

    // if (data?.isAuthticated === false) {
    //     return <Navigate to={"/"} />;
    // }

    // if (data?.user.userType !== "nurse") {
    //     return <Navigate to={"/dashboard"} />;
    // }


    return (
        <>
            <ToastContainer />
            <div className='flex bg-[rgb(245,245,245)]'>
                <Sidebar />
                <div className='mt-8 w-full'>
                    <div className='w-inherit  flex items-center justify-center'>
                        <h1 className='font-bold border py-3 px-12 text-3xl rounded-xl bg-[rgb(0,21,41)] text-white'>Health Care</h1>
                    </div>
                    <div className='mt-6 flex items-center justify-center'>
                        <div className=' bg-white w-[80%] rounded-lg shadow-2xl'>
                            <form onSubmit={HandleOnsubmitAppointment}>
                                <div className='flex mx-10 my-3'>
                                    <h3 className='flex items-center font-bold w-[21%] '>Patient Name</h3>
                                    <input
                                        type="text"
                                        placeholder="   Full Name"
                                        name="patientName"
                                        value={AddPatient.patientName}
                                        onChange={HandleAppointment}
                                        required
                                        className='bg-[rgb(245,245,245)] w-[80%] h-[50px]'
                                    />
                                </div>
                                <div className='flex mx-10 my-3'>
                                    <h3 className='flex items-center  font-bold w-[21%]'>Patient Age</h3>
                                    <input
                                        type="number"
                                        placeholder="   Age"
                                        name="age"
                                        value={AddPatient.age}
                                        onChange={HandleAppointment}
                                        required
                                        className='bg-[rgb(245,245,245)]  w-[80%] h-[50px]'
                                    />
                                </div>
                                <div className='flex mx-10 my-3'>
                                    <h3 className='flex items-center  font-bold w-[21%] '>Email</h3>
                                    <input
                                        type="email"
                                        placeholder="   abc@abc.com"
                                        name="email"
                                        value={AddPatient.email}
                                        onChange={HandleAppointment}
                                        required
                                        className='bg-[rgb(245,245,245)] w-[80%] h-[50px]'
                                    />
                                </div>
                                <div className='flex mx-10 my-3 '>
                                    <h3 className='flex items-center font-bold w-[21%] '>Date</h3>
                                    <input
                                        type="date"
                                        placeholder="   dd-mm-yyyy"
                                        name="date"
                                        value={AddPatient.date}
                                        onChange={HandleAppointment}
                                        className='bg-[rgb(245,245,245)] w-[80%] h-[50px] pl-3'
                                        required
                                    />
                                </div>
                                <div className='flex mx-10 my-3'>
                                    <h3 className='flex items-center font-bold w-[21%] '>Patient Gender</h3>
                                    <select
                                        name="gender"
                                        value={AddPatient.gender}
                                        onChange={HandleAppointment}
                                        required
                                        className='bg-[rgb(245,245,245)] w-[80%] h-[50px] pl-2 text-[#A8A3AF]'
                                    >
                                        <option value="   Choose Gender ">Choose Gender</option>
                                        <option value="   Male" >Male</option>
                                        <option value="   Female">Female</option>
                                        <option value="   Others">Others</option>
                                    </select>
                                </div>
                                <div className='flex mx-10 my-3 '>
                                    <h3 className='flex items-center font-bold w-[21%] '>DOB</h3>
                                    <input
                                        type="date"
                                        placeholder="   Choose Date"
                                        name="DOB"
                                        value={AddPatient.DOB}
                                        onChange={HandleAppointment}
                                        className='bg-[rgb(245,245,245)] w-[80%] h-[50px] pl-3'
                                        required
                                    />
                                </div>
                                <div className='flex mx-10 my-3'>
                                    <h3 className='flex items-center  font-bold w-[21%]'>Patient Mobile</h3>
                                    <input
                                        type="number"
                                        placeholder="   Number"
                                        name="mobile"
                                        value={AddPatient.mobile}
                                        onChange={HandleAppointment}
                                        required
                                        className='bg-[rgb(245,245,245)]  w-[80%] h-[50px]'
                                    />
                                </div>
                                <div className='flex mx-10 my-3'>
                                    <h3 className='flex items-center  font-bold w-[21%]'>Details</h3>
                                    <input
                                        type="text"
                                        placeholder="   Details"
                                        name="details"
                                        value={AddPatient.details}
                                        onChange={HandleAppointment}
                                        required
                                        className='bg-[rgb(245,245,245)]  w-[80%] h-[50px]'
                                    />
                                </div>

                                <div className='flex mx-10 my-3'>
                                    <h3 className='flex items-center font-bold w-[21%] '>Patient Disease</h3>
                                    <input
                                        type="text"
                                        placeholder=" Disease"
                                        name="disease"
                                        value={AddPatient.disease}
                                        onChange={HandleAppointment}
                                        required
                                        className='bg-[rgb(245,245,245)] w-[80%] h-[50px] pl-2 text-[#A8A3AF]'
                                    />
                                </div>

                                <div className='flex mx-10 my-3'>
                                    <h3 className='flex items-center font-bold w-[21%] '>Address</h3>
                                    <input
                                        type="text"
                                        placeholder=" Address"
                                        name="address"
                                        value={AddPatient.address}
                                        onChange={HandleAppointment}
                                        required
                                        className='bg-[rgb(245,245,245)] w-[80%] h-[50px] pl-2 text-[#A8A3AF]'
                                    />
                                </div>

                                <div className='flex mx-10 my-3'>
                                    <h3 className='flex items-center font-bold w-[21%] '>Bed Number</h3>
                                    <input
                                        type="number"
                                        placeholder=" bed No"
                                        name="bedNumber"
                                        value={bedDetails.bedNumber}
                                        onChange={HandleBedchange}
                                        required
                                        className='bg-[rgb(245,245,245)] w-[80%] h-[50px] pl-2 text-[#A8A3AF]'
                                    />
                                </div>
                                <div className='flex mx-10 my-3'>
                                    <h3 className='flex items-center font-bold w-[21%] '>Room Number</h3>
                                    <input
                                        type="number"
                                        placeholder=" Room No"
                                        name="roomNumber"
                                        value={bedDetails.roomNumber}
                                        onChange={HandleBedchange}
                                        required
                                        className='bg-[rgb(245,245,245)] w-[80%] h-[50px] pl-2 text-[#A8A3AF]'
                                    />
                                </div>
                                <div className='flex mx-10 my-3'>
                                    <h3 className='flex items-center font-bold w-[21%] '>Department</h3>
                                    <select
                                        name="department"
                                        value={AddPatient.department}
                                        onChange={HandleAppointment}
                                        required
                                        className='bg-[rgb(245,245,245)] w-[80%] h-[50px] pl-2 text-[#A8A3AF]'
                                    >
                                        <option value="   General">Select</option>
                                        <option value="   Cardiology">Cardiology</option>
                                        <option value="   Neurology">Neurology</option>
                                        <option value="   ENT">ENT</option>
                                        <option value="   Ophthalmologist">Ophthalmologist</option>
                                        <option value="   Anesthesiologist">Anesthesiologist</option>
                                        <option value="   Dermatologist">Dermatologist</option>
                                        <option value="   Oncologist">Oncologist</option>
                                        <option value="   Psychiatrist">Psychiatrist</option>
                                    </select>
                                </div>
                                <div className='flex mx-10 my-3'>
                                    <h3 className='flex items-center font-bold w-[21%] '>Doctor</h3>
                                    <select
                                        name="docID"
                                        value={AddPatient.docID}
                                        onChange={HandleAppointment}
                                        required
                                        className='bg-[rgb(245,245,245)] w-[80%] h-[50px] pl-2 text-[#A8A3AF]'
                                    >
                                        <option value="   ">Select Doctor</option>
                                        <option value="   100">Sahil</option>
                                        <option value="   1686836327293">Ram</option>
                                    </select>
                                </div>
                                <div className='flex mx-10 my-3'>
                                    <h3 className='flex items-center font-bold w-[21%] '>Patient Blood Group</h3>
                                    <select
                                        name="bloodGroup"
                                        onChange={HandleAppointment}
                                        required
                                        className='bg-[rgb(245,245,245)] w-[80%] h-[50px] pl-2 text-[#A8A3AF]'
                                    >
                                        <option value="   Choose Blood Group ">Select</option>
                                        <option value="   A+">A+</option>
                                        <option value="   A-">A-</option>
                                        <option value="   B+">B+</option>
                                        <option value="   B-">B-</option>
                                        <option value="   AB+">AB+</option>
                                        <option value="   AB-">AB-</option>
                                        <option value="   O+">O+</option>
                                        <option value="   O-">O-</option>
                                    </select>
                                </div>

                                <div className='flex mx-10 my-3 '>
                                    <h3 className='flex items-center font-bold w-[21%] '>Password</h3>
                                    <input
                                        type="text"
                                        placeholder="   Password"
                                        name="password"
                                        value={AddPatient.password}
                                        onChange={HandleAppointment}
                                        className='bg-[rgb(245,245,245)] w-[80%] h-[50px] pl-3'
                                        required
                                    />
                                </div>

                                <div className='flex items-center justify-center'>
                                    <button type="submit" className="px-10 py-2 bg-[rgb(0,21,41)] rounded-lg text-white mb-2">
                                        {loading ? "Loading..." : "Submit"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default AddPatient
