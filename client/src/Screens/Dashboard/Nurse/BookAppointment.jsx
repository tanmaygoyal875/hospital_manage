
import React, { useState } from "react";
import { CommonProblem } from './RawData'
import { useDispatch } from "react-redux";
import { AddPatients, CreateBooking } from '../../../Redux/Datas/action'
import Sidebar from "../Common/Sidebar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const notify = (text) => toast(text);


const BookAppointment = () => {

    const dispatch = useDispatch();
    const [Loading, setLoading] = useState(false);

    const InitValue = {
        patientName: "",
        age: "",
        gender: "",
        mobile: "",
        disease: "",
        address: "",
        email: "",
        department: "",
        patientID: Date.now(),
        date: "",
        time: "",
    };

    const [BookAppoint, setBookAppoint] = useState(InitValue);

    const HandleAppointment = (e) => {
        setBookAppoint({ ...BookAppoint, [e.target.name]: e.target.value });
    };

    const HandleOnsubmitAppointment = (e) => {
        e.preventDefault();

        if (BookAppoint.gender === "" || BookAppoint.department === "") {
            return notify("Please fill all the Details");
        }
        setLoading(true);
        // console.log("Hello",BookAppoint)
        dispatch(AddPatients(BookAppoint)).then(
            (res) => {
                let data = {
                    ...BookAppoint,
                    // patientID: res.id,
                };
                // console.log("HELLO", data.patientID)
                dispatch(CreateBooking(data));
                notify("Appointment Booked");
                setLoading(false);
                setBookAppoint(InitValue);
            }
        );
    };



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
                        <div className='shadow-2xl bg-white w-[80%] rounded-lg'>
                            <form onSubmit={HandleOnsubmitAppointment}>
                                <div className='flex mx-10 my-3'>
                                    <h3 className='flex items-center font-bold w-[21%] '>Patient Name</h3>
                                    <input
                                        type="text"
                                        placeholder="   Full Name"
                                        name="patientName"
                                        value={BookAppoint.patientName}
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
                                        value={BookAppoint.age}
                                        onChange={HandleAppointment}
                                        required
                                        className='bg-[rgb(245,245,245)]  w-[80%] h-[50px]'
                                    />
                                </div>
                                <div className='flex mx-10 my-3'>
                                    <h3 className='flex items-center font-bold w-[21%] '>Patient Gender</h3>
                                    <select
                                        name="gender"
                                        value={BookAppoint.gender}
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
                                <div className='flex mx-10 my-3'>
                                    <h3 className='flex items-center  font-bold w-[21%] '>Email</h3>
                                    <input
                                        type="email"
                                        placeholder="   abc@abc.com"
                                        name="email"
                                        value={BookAppoint.email}
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
                                        value={BookAppoint.date}
                                        onChange={HandleAppointment}
                                        className='bg-[rgb(245,245,245)] w-[80%] h-[50px] pl-3'
                                        required
                                    />
                                </div>

                                <div className='flex mx-10 my-3 '>
                                    <h3 className='flex items-center font-bold w-[21%] '>Time</h3>
                                    <input
                                        type="time"
                                        placeholder="   Choose Time"
                                        name="time"
                                        value={BookAppoint.time}
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
                                        value={BookAppoint.mobile}
                                        onChange={HandleAppointment}
                                        required
                                        className='bg-[rgb(245,245,245)]  w-[80%] h-[50px]'
                                    />
                                </div>


                                <div className='flex mx-10 my-3'>
                                    <h3 className='flex items-center font-bold w-[21%] '>Address</h3>
                                    <input
                                        type="text"
                                        placeholder=" Address"
                                        name="address"
                                        value={BookAppoint.address}
                                        onChange={HandleAppointment}
                                        required
                                        className='bg-[rgb(245,245,245)] w-[80%] h-[50px] pl-2 text-[#A8A3AF]'
                                    />
                                </div>
                                <div className='flex mx-10 my-3'>
                                    <h3 className='flex items-center font-bold w-[21%] '>Department</h3>
                                    <select
                                        name="department"
                                        value={BookAppoint.department}
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
                                    <h3 className='flex items-center font-bold w-[21%] '>Type of Disease</h3>
                                    <select
                                        name="disease"
                                        value={BookAppoint.disease}
                                        onChange={(e) => {
                                            HandleAppointment(e);
                                        }}
                                        required
                                        className='bg-[rgb(245,245,245)] w-[80%] h-[50px] pl-2 text-[#A8A3AF]'
                                    >
                                        <option value="Choose Blood Group">Select Disease</option>
                                        {CommonProblem.map((ele, i) => {
                                            return (
                                                <option key={i} value={ele.title}>
                                                    {ele.title}
                                                </option>
                                            );
                                        })}
                                    </select>
                                </div>

                                <div className='flex items-center justify-center'>
                                    <button type="submit" className="px-10 py-2 bg-[rgb(0,21,41)] rounded-lg text-white mb-2">
                                        {Loading ? "Loading..." : "Submit"}
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

export default BookAppointment
