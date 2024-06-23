import React, { useEffect, useState } from "react";
import { GetDoctorDetails } from '../../../Redux/Datas/action'
import { UpdateDoctor, UpdateNurse } from '../../../Redux/auth/action'
import Sidebar from '../Common/Sidebar'
import { Button, message, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { admin2 } from '../../../assets/index'
import { AiFillCalendar, AiFillEdit } from "react-icons/ai";

const DoctorProfile = () => {

    const { data } = useSelector((store) => store.auth);

    const disptach = useDispatch();

    useEffect(() => {
        disptach(GetDoctorDetails());
    }, []);

    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);

    const showModal = () => {
        setOpen(true);
    };

    const handleOk = () => {
        setConfirmLoading(true);
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
        }, 2000);
    };

    const [messageApi, contextHolder] = message.useMessage();

    const success = (text) => {
        messageApi.success(text);
    };

    const handleCancel = () => {
        setOpen(false);
    };

    const [formData, setFormData] = useState({
        docName: data.user.docName,
        age: data.user.age,
        gender: data.user.gender,
        bloodGroup: data.user.bloodGroup,
        education: data.user.education,
        mobile: data.user.mobile,
        DOB: data.user.DOB,
    });

    const handleFormChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFormSubmit = () => {
        disptach(UpdateDoctor(formData, data.user._id));
        success("user updated");
        handleOk();
    };

    if (data?.isAuthticated === false) {
        return <Navigate to={"/"} />;
    }

    if (data?.user.userType !== "doctor") {
        return <Navigate to={"/dashboard"} />;
    }
    return (
        <>
            <div className='flex bg-[rgb(245,245,245)]'>
                <Sidebar />
                <div className='mt-8 w-full'>
                    <div className='w-inherit  flex items-center justify-center'>
                        <h1 className='font-bold border py-3 px-12 text-3xl rounded-xl bg-[rgb(0,21,41)] text-white'>Profile</h1>
                    </div>
                    <div className="w-full h-[600px]  flex justify-center items-center">
                        <div className="h-[80%] w-[80%]  flex rounded-xl">
                            <div className="w-1/3 h-full  flex flex-col items-center justify-center bg-[rgb(0,21,41)]">
                                <div className="w-full h-1/2 flex justify-center items-center">
                                    <img src={admin2} alt="" className="h-[200px] w-[200px] rounded-2xl" />
                                </div>
                                <div className="h-1/2 w-full  rounded-xl">
                                    <div className="px-5  w-full h-full py-3">
                                        <div className="w-full bg-[rgb(245,245,245)] mb-3 rounded-xl h-[40px] px-3 flex">
                                            <div className="w-1/2 h-full flex items-center justify-center">
                                                Name
                                            </div>
                                            <div className="w-1/2 h-full flex items-center justify-center">
                                                {data?.user?.docName}
                                            </div>
                                        </div>
                                        <div className="w-full bg-[rgb(245,245,245)] mb-3 rounded-xl h-[40px] px-3 flex">
                                            <div className="w-1/2 h-full flex items-center justify-center">
                                                Gender
                                            </div>
                                            <div className="w-1/2 h-full flex items-center justify-center">
                                                {data?.user?.gender}
                                            </div>
                                        </div>
                                        <div className="w-full bg-[rgb(245,245,245)] mb-3 rounded-xl h-[40px] px-3 flex">
                                            <div className="w-1/2 h-full flex items-center justify-center">
                                                Age
                                            </div>
                                            <div className="w-1/2 h-full flex items-center justify-center">
                                                {data?.user?.age}
                                            </div>
                                        </div>
                                        <div className="w-full bg-[rgb(245,245,245)] mb-3 rounded-xl h-[40px] px-3 flex">
                                            <div className="w-1/2 h-full flex items-center justify-center">
                                                Blood Group
                                            </div>
                                            <div className="w-1/2 h-full flex items-center justify-center">
                                                {data?.user?.bloodGroup}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-2/3 h-full shadow-2xl bg-white px-10">
                                <h1 className="w-full text-center font-bold text-3xl my-3">Other Info</h1>

                                <div className="w-full bg-[rgb(245,245,245)] mb-3 rounded-xl h-[40px] px-3 flex">
                                    <div className="w-1/2 h-full flex items-center justify-center">
                                        Education
                                    </div>
                                    <div className="w-1/2 h-full flex items-center justify-center">
                                        {data?.user?.education}
                                    </div>
                                </div>
                                <div className="w-full bg-[rgb(245,245,245)] mb-3 rounded-xl h-[40px] px-3 flex">
                                    <div className="w-1/2 h-full flex items-center justify-center">
                                        DOB
                                    </div>
                                    <div className="w-1/2 h-full flex items-center justify-center">
                                        {data?.user?.DOB}
                                    </div>
                                </div>
                                <div className="w-full bg-[rgb(245,245,245)] mb-3 rounded-xl h-[40px] px-3 flex">
                                    <div className="w-1/2 h-full flex items-center justify-center">
                                        Mobile Number
                                    </div>
                                    <div className="w-1/2 h-full flex items-center justify-center">
                                        {data?.user?.mobile}
                                    </div>
                                </div>
                                <div className="w-full bg-[rgb(245,245,245)] mb-3 rounded-xl h-[40px] px-3 flex">
                                    <div className="w-1/2 h-full flex items-center justify-center">
                                        Address
                                    </div>
                                    <div className="w-1/2 h-full flex items-center justify-center">
                                        {data?.user?.address}
                                    </div>
                                </div>
                                <div className="w-full bg-[rgb(245,245,245)] mb-3 rounded-xl h-[40px] px-3 flex">
                                    <div className="w-1/2 h-full flex items-center justify-center">
                                        Hospital Timings
                                    </div>
                                    <div className="w-1/2 h-full flex items-center justify-center">
                                        9:00 AM to 5 PM
                                    </div>
                                </div>
                                <div className="w-full bg-[rgb(245,245,245)] mb-3 rounded-xl h-[40px] px-3 flex">
                                    <div className="w-1/2 h-full flex items-center justify-center">
                                        Hospital
                                    </div>
                                    <div className="w-1/2 h-full flex items-center justify-center">
                                        AIIMS Delhi
                                    </div>
                                </div>
                                <div className='flex items-center justify-center'>
                                    <button onClick={showModal} className="mt-2 flex px-10 py-2 bg-[rgb(0,21,41)] rounded-lg text-white mb-2">
                                        {/* {" "} */}
                                        <AiFillEdit className="flex items-center justify-center" />
                                        <div className="ml-3">Edit profile</div>
                                    </button>
                                    <Modal
                                        title="Edit details"
                                        open={open}
                                        onOk={handleOk}
                                        confirmLoading={confirmLoading}
                                        onCancel={handleCancel}
                                        footer={[
                                            <Button key="back" onClick={handleCancel}>
                                                Cancel
                                            </Button>,
                                            <Button key="submit" onClick={handleFormSubmit}>
                                                Edit
                                            </Button>,
                                        ]}
                                    >
                                        <form className="inputForm">
                                            <input
                                                name="nurseName"
                                                value={formData.docName}
                                                onChange={handleFormChange}
                                                type="text"
                                                placeholder="Full name"
                                                className="mr-3"
                                            />
                                            <input
                                                name="age"
                                                value={formData.age}
                                                onChange={handleFormChange}
                                                type="number"
                                                placeholder="Age"
                                                className="mr-3"
                                            />
                                            <select name="gender" onChange={handleFormChange}>
                                                <option value="">Select gender</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                                <option value="other">Others</option>
                                            </select>
                                            <input
                                                name="bloodGroup"
                                                value={formData.bloodGroup}
                                                onChange={handleFormChange}
                                                type="text"
                                                placeholder="Blood Group"
                                                className="mr-3"
                                            />
                                            <input
                                                name="education"
                                                value={formData.education}
                                                onChange={handleFormChange}
                                                type="text"
                                                placeholder="education"
                                                className="mr-3"
                                            />
                                            <input
                                                name="mobile"
                                                value={formData.mobile}
                                                onChange={handleFormChange}
                                                type="number"
                                                placeholder="mobile"
                                                className="mr-3"
                                            />
                                            <input
                                                name="DOB"
                                                value={formData.DOB}
                                                onChange={handleFormChange}
                                                type="date"
                                                placeholder="Date of birth"
                                                className="mr-3"
                                            />
                                        </form>
                                    </Modal>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DoctorProfile
