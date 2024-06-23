import React from 'react'
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AdminRegister, SendPassword } from '../../../Redux/auth/action'
import Sidebar from '../Common/Sidebar'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigate } from "react-router-dom";
const notify = (text) => toast(text);



const AddAdmin = () => {

  const { data } = useSelector((store) => store.auth);

  const [loading, setloading] = useState(false);

  const InitData = {
    adminName: "",
    age: "",
    mobile: "",
    email: "",
    gender: "",
    DOB: "",
    address: "",
    education: "",
    adminID: Date.now(),
    password: "",
  };
  const [AdminValue, setAdminValue] = useState(InitData);

  const HandleDoctorChange = (e) => {
    setAdminValue({ ...AdminValue, [e.target.name]: e.target.value });
  };
  const dispatch = useDispatch();

  const HandleDoctorSubmit = (e) => {
    e.preventDefault();
    setloading(true);
    dispatch(AdminRegister(AdminValue)).then((res) => {
      if (res.message === "Admin already exists") {
        setloading(false);
        return notify("Admin Already Exist");
      }
      if (res.message === "error") {
        setloading(false);
        return notify("Something went wrong, Please try Again");
      }
      notify("Admin Added");

      let data = {
        email: res.data.email,
        password: res.data.password,
        userId: res.data.adminID,
      };
      dispatch(SendPassword(data)).then((res) => notify("Account Detais Sent"));
      setloading(false);
      setAdminValue(InitData);
    });
  };

  if (data?.isAuthticated === false) {
    return <Navigate to={"/"} />;
  }

  if (data?.user.userType !== "admin") {
    return <Navigate to={"/dashboard"} />;
  }



  return (
    <div>
      <ToastContainer />
      <div className='flex bg-[rgb(245,245,245)]'>
        <Sidebar/>
        <div className='mt-8 w-full'>
          <div className='w-inherit  flex items-center justify-center'>
            <h1 className='font-bold border py-3 px-12 text-3xl rounded-xl bg-[rgb(0,21,41)] text-white'>Health Care</h1>
          </div>
          <div className='mt-6 flex items-center justify-center'>
            <div className='shadow-2xl bg-white w-[80%] rounded-lg'>
              <form onSubmit={HandleDoctorSubmit}>
                <div className='flex mx-10 my-3'>
                  <h3 className='flex items-center font-bold w-[21%] '>Admin Name</h3>
                  <input
                    type="text"
                    placeholder="   Full Name"
                    name="adminName"
                    value={AdminValue.adminName}
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
                    value={AdminValue.age}
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
                    value={AdminValue.mobile}
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
                    value={AdminValue.email}
                    onChange={HandleDoctorChange}
                    required
                    className='bg-[rgb(245,245,245)] w-[80%] h-[50px]'
                  />
                </div>
                <div className='flex mx-10 my-3'>
                  <h3 className='flex items-center font-bold w-[21%] '>Gender</h3>
                  <select
                    name="gender"
                    value={AdminValue.gender}
                    onChange={HandleDoctorChange}
                    required
                    className='bg-[rgb(245,245,245)] w-[80%] h-[50px] pl-2 text-[#A8A3AF]'
                  >
                    <option value="Choose Gender ">Choose Gender</option>
                    <option value="Male" >Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
                <div className='flex mx-10 my-3'>
                  <h3 className='flex items-center font-bold w-[21%] '>Birthdate</h3>
                  <input
                    type="date"
                    placeholder="   dd-mm-yy"
                    name="DOB"
                    value={AdminValue.DOB}
                    onChange={HandleDoctorChange}
                    required
                    className='bg-[rgb(245,245,245)] w-[80%] h-[50px]'
                  />
                </div>
                <div className='flex mx-10 my-3'>
                  <h3 className='flex items-center font-bold w-[21%] '>Address</h3>
                  <input
                    type="text"
                    placeholder="   Address"
                    name="address"
                    value={AdminValue.address}
                    onChange={HandleDoctorChange}
                    required
                    className='bg-[rgb(245,245,245)] w-[80%] h-[50px]'
                  />
                </div>
                <div className='flex mx-10 my-3'>
                  <h3 className='flex items-center font-bold w-[21%] '>Education</h3>
                  <input
                    type="text"
                    placeholder="   MBBS"
                    name="education"
                    value={AdminValue.education}
                    onChange={HandleDoctorChange}
                    required
                    className='bg-[rgb(245,245,245)] w-[80%] h-[50px]'
                  />
                </div>
                <div className='flex mx-10 my-3'>
                  <h3 className='flex items-center font-bold w-[21%] '>Password</h3>
                  <input
                    type="text"
                    placeholder="   Password"
                    name="password"
                    value={AdminValue.password}
                    onChange={HandleDoctorChange}
                    required
                    className='bg-[rgb(245,245,245)] w-[80%] h-[50px]'
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
    </div>
  )
}

export default AddAdmin
