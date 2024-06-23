import { useEffect, useState } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import {
    DeleteAppointment,
    GetAllAppointment,
} from '../../../Redux/Datas/action'
import Sidebar from "../Common/Sidebar";

const UpdateAppointments = () => {

    const { data } = useSelector((store) => store.auth);

    const disptach = useDispatch();

    const columns = [
        { title: "Patient Name", dataIndex: "patientName", key: "patientName" },
        { title: "Mobile", dataIndex: "mobile", key: "mobile" },
        { title: "Disease", dataIndex: "disease", key: "disease" },
        { title: "Department", dataIndex: "department", key: "department" },
        { title: "Date", dataIndex: "date", key: "date" },
    ];

    const AllAppointment = useSelector((state) => state.data.Appointments);

    const DeleteAppoint = (id) => {
        disptach(DeleteAppointment(id));
    };
    useEffect(() => {
        disptach(GetAllAppointment());
    }, []);

    if (data?.isAuthticated === false) {
        return <Navigate to={"/"} />;
    }

    if (data?.user.userType !== "doctor") {
        return <Navigate to={"/dashboard"} />;
    }

    return (
        <>
            <div className="flex bg-[rgb(245,245,245)]">
                <Sidebar />
                <div className='mt-8 w-full'>
                    <div className='w-inherit  flex items-center justify-center'>
                        <h1 className='font-bold border py-3 px-12 text-3xl rounded-xl bg-[rgb(0,21,41)] text-white'>Health Care</h1>
                    </div>
                    <div className="w-inherit  mx-10 mt-3">
                        <table className="w-full shadow-2xl">
                            <thead className="bg-[rgb(0,21,41)] text-white font-bold">
                                <tr>
                                    <th className="py-3">Patient Name</th>
                                    <th className="py-3">Mobile</th>
                                    <th className="py-3">Disease</th>
                                    <th className="py-3">Department</th>
                                    <th className="py-3">Date</th>
                                    <th className="py-3">Resolve</th>
                                </tr>
                            </thead>
                            <tbody className="font-bold text-center">
                                {AllAppointment?.map((ele) => {
                                    return (
                                        <tr>
                                            <td className="py-3">{ele.patientName}</td>
                                            <td>{ele.mobile}</td>
                                            <td>{ele.disease}</td>
                                            <td>{ele.department}</td>
                                            <td>{ele.date}</td>
                                            <td>
                                                <button
                                                    style={{
                                                        border: "none",
                                                        color: "red",
                                                        outline: "none",
                                                        background: "transparent",
                                                        cursor: "pointer",
                                                    }}
                                                    onClick={() => DeleteAppoint(ele._id)}
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                        {/* <Table columns={columns} dataSource={data} className="w-full " /> */}

                    </div>
                </div>
            </div>
        </>
    )
}

export default UpdateAppointments
