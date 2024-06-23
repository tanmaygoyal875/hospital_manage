import React from 'react'
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddBed } from '../../../Redux/Datas/action'
import Sidebar from '../Common/Sidebar'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigate } from "react-router-dom";
const notify = (text) => toast(text);


const AddBeds = () => {

    const { data } = useSelector((store) => store.auth);

    const InitData = {
        roomNumber: "none",
        bedNumber: "",
        occupied: "available",
    };
    const [BedData, setBedData] = useState(InitData);

    const [loading, setloading] = useState(false);

    const dispatch = useDispatch();

    const HandleAmbuChange = (e) => {
        setBedData({
            ...BedData,
            [e.target.name]: e.target.value,
        });
    };

    const HandleAmbuSubmit = (e) => {
        e.preventDefault();
        setloading(true);
        dispatch(AddBed(BedData));
        setloading(false);
        setBedData(InitData);
        notify("Bed Added");
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
                                    <h3 className='flex items-center font-bold w-[21%]'>Bed Number</h3>
                                    <input
                                        type="number"
                                        placeholder="   bed No"
                                        name="bedNumber"
                                        value={BedData.bedNumber}
                                        onChange={HandleAmbuChange}
                                        required
                                        className='bg-[rgb(245,245,245)] w-[80%] h-[100px] rounded-xl'
                                    />
                                </div>
                                <div className='flex mx-10 my-3'>
                                    <h3 className='flex items-center  font-bold w-[21%] '>Room Number</h3>
                                    <input
                                        type="number"
                                        placeholder="   Room no"
                                        name="roomNumber"
                                        value={BedData.roomNumber}
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

export default AddBeds
