import React from 'react'
import { useState } from "react"
import { Radio } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  AdminLogin,
  DoctorLogin,
  forgetPassword,
  NurseLogin,
} from "../../Redux/auth/action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Drawer } from "antd";
import { admin2 } from '../../assets/index'

const notify = (text) => toast(text);

const DLogin = () => {

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  // ************************************************
  const [Loading, setLoading] = useState(false);
  const [placement, SetPlacement] = useState("Nurse");
  const [formvalue, setFormvalue] = useState({
    ID: "",
    password: "",
  });
  const dispatch = useDispatch();

  const Handlechange = (e) => {
    setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  const HandleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (formvalue.ID !== "" && formvalue.password !== "") {
      if (placement === "Nurse") {
        let data = {
          ...formvalue,
          nurseID: formvalue.ID,
        };
        dispatch(NurseLogin(data)).then((res) => {
          if (res.message === "Successful") {
            notify("Login Successful");
            setLoading(false);
            return navigate("/dashboard");
          }
          if (res.message === "Wrong credentials") {
            setLoading(false);

            notify("Wrong credentials");
          }
          if (res.message === "Error") {
            setLoading(false);

            notify("Something went Wrong, Please Try Again");
          }
        });
      } else if (placement === "Doctor") {
        let data = {
          ...formvalue,
          docID: formvalue.ID,
        };
        console.log(data);
        dispatch(DoctorLogin(data)).then((res) => {
          if (res.message === "Successful") {
            notify("Login Successful");
            setLoading(false);

            return navigate("/dashboard");
          }
          if (res.message === "Wrong credentials") {
            setLoading(false);

            notify("Wrong credentials");
          }
          if (res.message === "Error") {
            setLoading(false);

            notify("Something went Wrong, Please Try Again");
          }
        });
      } else if (placement === "Admin") {
        let data = {
          ...formvalue,
          adminID: formvalue.ID,
        };
        dispatch(AdminLogin(data)).then((res) => {
          if (res.message === "Successful") {
            notify("Login Successful");
            setLoading(false);

            return navigate("/dashboard");
          }
          if (res.message === "Wrong credentials") {
            setLoading(false);

            notify("Wrong credentials");
          }
          if (res.message === "Error") {
            setLoading(false);

            notify("Something went Wrong, Please Try Again");
          }
        });
      }
    }
  };

  const placementChange = (e) => {
    SetPlacement(e.target.value);
  };

  const [ForgetPassword, setForgetPassword] = useState({
    type: "",
    email: "",
  });

  const HandleForgetPassword = (e) => {
    setForgetPassword({ ...ForgetPassword, [e.target.name]: e.target.value });
  };

  const [forgetLoading, setforgetLoading] = useState(false);

  const HandleChangePassword = () => {
    if (ForgetPassword.type === "") {
      return notify("Please Fill all Details");
    }
    setforgetLoading(true);
    dispatch(forgetPassword(ForgetPassword)).then((res) => {
      if (res.message === "User not found") {
        setforgetLoading(false);
        return notify("User Not Found");
      }
      setForgetPassword({
        type: "",
        email: "",
      });
      onClose();
      setforgetLoading(false);
      return notify("Account Details Send");
    });
  };


  return (
    <>
      <ToastContainer />
      <div className='h-[100vh] w-[100vw] bg-mediumBlue flex items-center justify-center'>
        <div className='h-[60%] w-[60%]  rounded-2xl bg-lightGrey flex shadow-2xl'>
          <div className='w-1/2 h-full rounded-2xl bg-lightGrey flex justify-center items-center'>
            <div>
              <div>
                <h1 className='font-bold text-5xl'>Welcome to</h1>
              </div>
              <div>
                <h1 className='font-bold text-5xl pt-5'>Health Care</h1>
              </div>
              <div className='mt-3 flex items-center justify-center '>
                <span className='font-bold'>Temporary Credentials</span>
              </div>
              <div className='mt-2 flex items-center justify-center '>
                <span className='font-bold'>ID - 1234</span> 
              </div >
              <div className='mt-2 flex items-center justify-center '>
              <span className='font-bold'>Password - 2024@mnc</span> 
              </div>
            </div>
          </div>
          <div className='w-1/2 h-full border-l-2 px-3 py-4'>
            <div>
              <div className='w-full flex items-center justify-center font-bold text-xl py-2'>
                Login
              </div>
              <div className='w-full flex items-center justify-center  py-2 font-bold'>
                <Radio.Group
                  value={placement}
                  onChange={placementChange}
                  className={"radiogroup"}
                >
                  <Radio.Button value="Nurse" className={"radiobutton"}>
                    Nurse
                  </Radio.Button>
                  <Radio.Button value="Doctor" className={"radiobutton"}>
                    Doctor
                  </Radio.Button>
                  <Radio.Button value="Admin" className={"radiobutton"}>
                    Admin
                  </Radio.Button>
                </Radio.Group>
              </div>
              <div className='flex items-center justify-center pt-1'>
                <img src={admin2} alt="admin" className='h-[80px] w-[80px]' />
              </div>
            </div>
            <div className='mt-3  flex items-center justify-center'>
              <form onSubmit={HandleSubmit} >
                <h3 className='flex justify-center items-center font-bold mt-1 mb-2'>{placement} ID</h3>
                <input
                  type="number"
                  name="ID"
                  value={formvalue.ID}
                  onChange={Handlechange}
                  required
                  className='rounded-xl w-[100%] px-3'
                />
                <h3 className='flex justify-center items-center font-bold my-2'>Password</h3>
                <input
                  type="password"
                  name="password"
                  value={formvalue.password}
                  onChange={Handlechange}
                  required
                  className='rounded-xl w-[100%] px-3'
                />
                <div className='flex items-center justify-center'>
                  <button type="submit" className='w-[80%] bg-mediumBlue rounded-2xl mt-5 font-bold'>{Loading ? "Loading..." : "Submit"}</button>
                </div>
                <p className='mt-2'>
                  Forget Password?{" "}
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={showDrawer}
                    className='text-mediumBlue'
                  >
                    Get it on Email !
                  </span>
                </p>

                <Drawer
                  title="Forget Password"
                  placement="left"
                  onClose={onClose}
                  open={open}
                >
                  <div className='mb-5'>
                    <label className='text-[18px] mr-3'>Choose Type</label>

                    <select
                      name="type"
                      value={ForgetPassword.type}
                      onChange={HandleForgetPassword}
                      required
                    >
                      <option value="">User Type</option>
                      <option value="nurse">Nurse</option>
                      <option value="doctor">Doctor</option>
                      <option value="admin">Admin</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "18px" }}>
                      Enter Email
                    </label>
                    <input
                      type="email"
                      placeholder="example@mail.com"
                      name="email"
                      value={ForgetPassword.email}
                      onChange={HandleForgetPassword}
                      required
                      style={{
                        width: "100%",
                        height: "3rem",
                        borderRadius: "5px",
                        border: "none",
                        backgroundColor: "#bce0fb",
                        fontSize: "18px",
                        marginTop: "10px",
                        paddingLeft: "10px",
                      }}
                    />
                  </div>

                  <button className='bg-mediumBlue'
                    style={{
                      width: "50%",
                      margin: " 20px auto",
                      display: "flex",
                      padding: "10px",
                      fontSize: "18px",
                      border: "none",
                      borderRadius: "7px",
                      cursor: "pointer",
                      justifyContent: "center",
                    }}
                    onClick={HandleChangePassword}
                  >
                    {forgetLoading ? "Loading..." : " Send Mail"}
                  </button>
                </Drawer>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DLogin
