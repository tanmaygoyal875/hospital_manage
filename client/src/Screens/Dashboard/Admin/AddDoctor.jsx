import React from 'react'
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DoctorRegister, SendPassword } from '../../../Redux/auth/action'
import Sidebar from '../Common/Sidebar'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigate } from "react-router-dom";
const notify = (text) => toast(text);

const AddDoctor = () => {

  const { data } = useSelector((store) => store.auth);

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const initData = {
    docName: "",
    age: "",
    mobile: "",
    email: "",
    bloodGroup: "",
    gender: "",
    DOB: "",
    address: "",
    education: "",
    department: "",
    docID: Date.now(),
    password: "",
    details: "",
  };
  const [DoctorValue, setDoctorValue] = useState(initData);

  const HandleDoctorChange = (e) => {
    setDoctorValue({ ...DoctorValue, [e.target.name]: e.target.value });
  };

  const HandleDoctorSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    dispatch(DoctorRegister(DoctorValue)).then((res) => {
      if (res.message === "Doctor already exists") {
        setLoading(false);
        return notify("Doctor Already Exist");
      }
      if (res.message === "error") {
        setLoading(false);
        return notify("Something went wrong, Please try Again");
      }

      let data = {
        email: res.data.email,
        password: res.data.password,
        userId: res.data.docID,
      };
      console.log(data, "DOCTOR REGISTER SUCCESSFULLY");
      dispatch(SendPassword(data)).then((res) => notify("Account Detais Sent"));
      setLoading(false);
      setDoctorValue(initData);
    });
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
              <form onSubmit={HandleDoctorSubmit}>
                <div className='flex mx-10 my-3'>
                  <h3 className='flex items-center font-bold w-[21%] '>Doctor Name</h3>
                  <input
                    type="text"
                    placeholder="   Full Name"
                    name="docName"
                    value={DoctorValue.adminName}
                    onChange={HandleDoctorChange}
                    required
                    className='bg-[rgb(245,245,245)] w-[80%] h-[50px]'
                  />
                </div>
                <div className='flex mx-10 my-3'>
                  <h3 className='flex items-center  font-bold w-[21%] '>Age</h3>
                  <input
                    type="number"
                    placeholder="   Age"
                    name="age"
                    value={DoctorValue.age}
                    onChange={HandleDoctorChange}
                    required
                    className='bg-[rgb(245,245,245)]  w-[80%] h-[50px]'
                  />
                </div>
                <div className='flex mx-10 my-3'>
                  <h3 className='flex items-center  font-bold w-[21%]'>Contact Number</h3>
                  <input
                    type="number"
                    placeholder="   Emergency Number"
                    name="mobile"
                    value={DoctorValue.mobile}
                    onChange={HandleDoctorChange}
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
                    value={DoctorValue.email}
                    onChange={HandleDoctorChange}
                    required
                    className='bg-[rgb(245,245,245)] w-[80%] h-[50px]'
                  />
                </div>
                <div className='flex mx-10 my-3'>
                  <h3 className='flex items-center font-bold w-[21%] '>Gender</h3>
                  <select
                    name="gender"
                    value={DoctorValue.gender}
                    onChange={HandleDoctorChange}
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
                  <h3 className='flex items-center font-bold w-[21%] '>Blood Group</h3>
                  <select
                    name="bloodGroup"
                    value={DoctorValue.bloodGroup}
                    onChange={HandleDoctorChange}
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
                <div className='flex mx-10 my-3'>
                  <h3 className='flex items-center font-bold w-[21%] '>Birthdate</h3>
                  <input
                    type="date"
                    placeholder="   dd-mm-yy"
                    name="DOB"
                    value={DoctorValue.DOB}
                    onChange={HandleDoctorChange}
                    required
                    className='bg-[rgb(245,245,245)] w-[80%] h-[50px] pl-2 text-[#A8A3AF]'
                  />
                </div>
                <div className='flex mx-10 my-3'>
                  <h3 className='flex items-center font-bold w-[21%] '>Address</h3>
                  <input
                    type="text"
                    placeholder="   Address"
                    name="address"
                    value={DoctorValue.address}
                    onChange={HandleDoctorChange}
                    required
                    className='bg-[rgb(245,245,245)] w-[80%] h-[50px]'
                  />
                </div>
                <div className='flex mx-10 my-3'>
                  <h3 className='flex items-center font-bold w-[21%] '>Education</h3>
                  <input
                    type="text"
                    placeholder="   eg.MBBS"
                    name="education"
                    value={DoctorValue.education}
                    onChange={HandleDoctorChange}
                    required
                    className='bg-[rgb(245,245,245)] w-[80%] h-[50px]'
                  />
                </div>
                <div className='flex mx-10 my-3'>
                  <h3 className='flex items-center font-bold w-[21%] '>Department</h3>
                  <select
                    name="department"
                    value={DoctorValue.department}
                    onChange={HandleDoctorChange}
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
                  <h3 className='flex items-center font-bold w-[21%] '>Password</h3>
                  <input
                    type="text"
                    placeholder="   Password"
                    name="password"
                    value={DoctorValue.password}
                    onChange={HandleDoctorChange}
                    required
                    className='bg-[rgb(245,245,245)] w-[80%] h-[50px]'
                  />
                </div>
                <div className='flex mx-10 my-3'>
                  <h3 className='flex items-center font-bold w-[21%] '>Other Details</h3>
                  <textarea
                    type="text"
                    placeholder="   Extra Info"
                    rows="4"
                    cols="50"
                    name="details"
                    value={DoctorValue.details}
                    onChange={HandleDoctorChange}
                    required
                    className='bg-[rgb(245,245,245)] w-[80%]'
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

export default AddDoctor
