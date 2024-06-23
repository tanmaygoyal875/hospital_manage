import React from 'react'
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AmbulanceRegister } from '../../../Redux/auth/action'
import Sidebar from '../Common/Sidebar'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigate } from "react-router-dom";
const notify = (text) => toast(text);


const AddAmbulance = () => {

    const { data } = useSelector((store) => store.auth);

    let [ambuType, setambuType] = useState("none");

    const [AmbuData, setAmbuDate] = useState({
        type: "none",
        charges: "",
        ambulanceID: "",
        ambulanceDriver: "",
        number: "",
    });

    const [loading, setloading] = useState(false);

    const dispatch = useDispatch();

    const HandleAmbuChange = (e) => {
        setAmbuDate({
            ...AmbuData,
            [e.target.name]: e.target.value,
        });
    };

    const HandleAmbuSubmit = (e) => {
        e.preventDefault();
        setloading(true);
        let data = {
            ...AmbuData,
            type: ambuType,
        };
        dispatch(AmbulanceRegister(data));
        setloading(false);
        notify("Ambulance Added");
    };

    if (data?.isAuthticated === false) {
        return <Navigate to={"/"} />;
    }

    if (data?.user.userType !== "admin") {
        return <Navigate to={"/dashboard"} />;
    }


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
                            <form onSubmit={HandleAmbuSubmit}>
                                <div className='flex mx-10 my-3'>
                                    <h3 className='flex items-center font-bold w-[21%] '>Ambulance Type</h3>
                                    <select
                                        name="type"
                                        value={AmbuData.type}
                                        onChange={HandleAmbuChange}
                                        required
                                        className='bg-[rgb(245,245,245)] w-[80%] h-[100px] pl-2 text-[#A8A3AF] rounded-xl'
                                    >
                                        <option value="   Select">Select</option>
                                        <option value="   Mobile ICU Ambulance">Mobile ICU Ambulance</option>
                                        <option value="   Basic Life Support Ambulance">Basic Life Support Ambulance</option>
                                        <option value="   Collective Ambulance">Collective Ambulance</option>
                                    </select>
                                </div>
                                <div className='flex mx-10 my-3'>
                                    <h3 className='flex items-center  font-bold w-[21%] '>Price per Hours</h3>
                                    <input
                                        type="number"
                                        placeholder="   eg.200/-"
                                        name="charges"
                                        value={AmbuData.roomNumber}
                                        onChange={HandleAmbuChange}
                                        required
                                        className='bg-[rgb(245,245,245)]  w-[80%] h-[100px] rounded-xl'
                                    />
                                </div>
                                <div className='flex mx-10 my-3'>
                                    <h3 className='flex items-center  font-bold w-[21%] '>Ambulance Code</h3>
                                    <input
                                        type="number"
                                        placeholder="   eg.1111"
                                        name="ambulanceID"
                                        value={AmbuData.ambulanceID}
                                        onChange={HandleAmbuChange}
                                        required
                                        className='bg-[rgb(245,245,245)]  w-[80%] h-[100px] rounded-xl'
                                    />
                                </div>
                                <div className='flex mx-10 my-3'>
                                    <h3 className='flex items-center  font-bold w-[21%] '>Driver Name</h3>
                                    <input
                                        type="text"
                                        placeholder="   Name"
                                        name="ambulanceDriver"
                                        value={AmbuData.ambulanceDriver}
                                        onChange={HandleAmbuChange}
                                        required
                                        className='bg-[rgb(245,245,245)]  w-[80%] h-[100px] rounded-xl'
                                    />
                                </div>
                                <div className='flex mx-10 my-3'>
                                    <h3 className='flex items-center  font-bold w-[21%] '>Driver Contact No</h3>
                                    <input
                                        type="number"
                                        placeholder="   Contact No"
                                        name="number"
                                        value={AmbuData.number}
                                        onChange={HandleAmbuChange}
                                        required
                                        className='bg-[rgb(245,245,245)]  w-[80%] h-[100px] rounded-xl'
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

export default AddAmbulance
