import { Table } from "antd";
import React from "react";
import { MdPersonAdd } from "react-icons/md";
import { FaUserNurse } from "react-icons/fa";
import { RiEmpathizeLine } from "react-icons/ri";
import { FaBed } from "react-icons/fa";
import { MdOutlineBedroomParent } from "react-icons/md";
import { FaAmbulance } from "react-icons/fa";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import { MdPayment } from "react-icons/md";
import { RiAdminLine } from "react-icons/ri";
import Sidebar from './Sidebar'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllData, GetPatients } from '../../../Redux/Datas/action'


const DashboardStats = () => {

    const columns = [
        { title: "Name", dataIndex: "patientName", key: "patientName" },
        { title: "Age", dataIndex: "age", key: "age" },
        { title: "Disease", dataIndex: "disease", key: "disease" },
        { title: "Blood Group", dataIndex: "bloodGroup", key: "bloodGroup" },
        { title: "Department", dataIndex: "department", key: "department" },
        { title: "Email", dataIndex: "email", key: "email" },
    ];

    const { patients } = useSelector((store) => store.data.patients);
    const {
        dashboard: { data },
    } = useSelector((store) => store.data);

    console.log(data);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetPatients());
        dispatch(GetAllData());
    }, []);
    return (
        <>
            <div className='flex bg-[rgb(245,245,245)]'>
                <Sidebar />
                <div className='mt-8 w-full'>
                    <div className='w-inherit  flex items-center justify-center'>
                        <h1 className='font-bold py-3 px-12 text-3xl rounded-xl bg-[rgb(0,21,41)] text-white'>Welcome to Health and Care</h1>
                    </div>
                    <div className="mt-6 flex flex-col items-center justify-center  mx-10">
                        <div className="w-full">
                            <div className="w-full">
                                <h2 className="font-bold text-[30px]">STATS</h2>
                            </div>
                            <div className="w-full flex flex-col mt-3">
                                <div className="w-full h-auto flex justify-between">
                                    <div className="w-1/4 h-[100px] flex justify-center items-center bg-white rounded-xl shadow-2xl ">
                                        <div className="mr-8">
                                            <MdPersonAdd size={80} />
                                        </div>
                                        <div className="ml-3 flex flex-col">
                                            <div className="text-2xl font-bold text-center">
                                                {data?.doctor}
                                            </div>
                                            <div className="mt-1 text-xl font-bold">
                                                Doctors
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-1/4 h-[100px] flex justify-center items-center bg-white rounded-xl shadow-2xl mx-4">
                                        <div className="mr-8">
                                            <FaUserNurse size={60} />
                                        </div>
                                        <div className="ml-3 flex flex-col">
                                            <div className="text-2xl font-bold text-center">
                                                {data?.nurse}
                                            </div>
                                            <div className="mt-1 text-xl font-bold">
                                                Nurses
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-1/4 h-[100px] flex justify-center items-center bg-white rounded-xl shadow-2xl mx-4">
                                        <div className="mr-8">
                                            <RiEmpathizeLine size={65} />
                                        </div>
                                        <div className="ml-3 flex flex-col">
                                            <div className="text-2xl font-bold text-center">
                                                {data?.patient}
                                            </div>
                                            <div className="mt-1 text-xl font-bold">
                                                Patients
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-1/4 h-[100px] flex justify-center items-center bg-white rounded-xl shadow-2xl">
                                        <div className="mr-8">
                                            <RiAdminLine size={60} />
                                        </div>
                                        <div className="ml-3 flex flex-col">
                                            <div className="text-2xl font-bold text-center">
                                                {data?.admin}
                                            </div>
                                            <div className="mt-1 text-xl font-bold">
                                                Admins
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full h-auto flex justify-between mt-6">
                                    <div className="w-1/4 h-[100px] flex justify-center items-center bg-white rounded-xl shadow-2xl ">
                                        <div className="mr-8">
                                            <FaAmbulance size={60} />
                                        </div>
                                        <div className="ml-3 flex flex-col">
                                            <div className="text-2xl font-bold text-center">
                                                {data?.ambulance}
                                            </div>
                                            <div className="mt-1 text-xl font-bold">
                                                Ambulances
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-1/4 h-[100px] flex justify-center items-center bg-white rounded-xl shadow-2xl mx-4">
                                        <div className="mr-8">
                                            <FaBed size={60} />
                                        </div>
                                        <div className="ml-3 flex flex-col">
                                            <div className="text-2xl font-bold text-center">
                                                {data?.bed}
                                            </div>
                                            <div className="mt-1 text-xl font-bold">
                                                Beds
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-1/4 h-[100px] flex justify-center items-center bg-white rounded-xl shadow-2xl mx-4">
                                        <div className="mr-8">
                                            <BsFillBookmarkCheckFill size={50} />
                                        </div>
                                        <div className="ml-3 flex flex-col">
                                            <div className="text-2xl font-bold text-center">
                                                {data?.appointment}
                                            </div>
                                            <div className="mt-1 text-xl font-bold">
                                                Appointments
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-1/4 h-[100px] flex justify-center items-center bg-white rounded-xl shadow-2xl">
                                        <div className="mr-8">
                                            <MdPayment size={60} />
                                        </div>
                                        <div className="ml-3 flex flex-col">
                                            <div className="text-2xl font-bold text-center">
                                                {data?.report}
                                            </div>
                                            <div className="mt-1 text-xl font-bold">
                                                Reports
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="w-full">
                                <h2 className="font-bold text-[30px] mt-10">PATIENT DETAILS</h2>
                            </div>
                            <div className="patientBox mt-3 shadow-2xl">
                                <Table columns={columns} dataSource={patients} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardStats
