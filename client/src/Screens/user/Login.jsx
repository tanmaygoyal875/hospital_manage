import React from 'react'
import { admin2 } from '../../assets/index'
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { authLogin, forgotPassword } from '../../Redux/user/auth/action'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notify = (text) => toast(text);
const Login = () => {

    const [form, setForm] = useState({ patientID: "", password: "" });
    const [email, setemail] = useState("");
    const dispatch = useDispatch();
    const onChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    const navigate = useNavigate();
    const handleClick = (e) => {
        try {
            dispatch(authLogin(form)).then((res) => {
                if (res.message === "Login Successful.") {
                    notify("Login Successful.");
                    return navigate("/");
                }
                if (res.message === "Wrong credentials, Please try again.") {
                    return notify("Wrong credentials, Please try again.");
                }
                if (res.message === "Error occurred, unable to Login.") {
                }
            });
        } catch (error) {
            console.log(error);
            return notify("Error occurred, unable to Login.");
        }
    };
    const [forgotLoading, setforgetLoading] = useState(false);
    const HandlePassword = () => {
        let data = { email, type: "patient" };
        setforgetLoading(true);
        dispatch(forgotPassword(data)).then((res) => {
            if (res.message === "User not found") {
                setforgetLoading(false);
                return notify("User Not Found");
            }
            setemail("");
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
                        </div>
                    </div>
                    <div className='w-1/2 h-full border-l-2 px-3 py-4'>
                        <div>
                            <div className='w-full flex items-center justify-center font-bold text-xl py-2'>
                                Login
                            </div>
                            <div className='flex items-center justify-center pt-1'>
                                <img src={admin2} alt="admin" className='h-[80px] w-[80px]' />
                            </div>
                        </div>
                        <div className='mt-3  flex flex-col items-center justify-center'>
                            <form action="#" >
                                <h3 className='flex justify-center items-center font-bold mt-1 mb-2'>Patient ID</h3>
                                <input
                                    type="text"
                                    name="patientID"
                                    value={form.patientID}
                                    onChange={onChange}
                                    required
                                    className='rounded-xl w-[100%] px-3'
                                />
                                <h3 className='flex justify-center items-center font-bold my-2'>Password</h3>
                                <input
                                    type="password"
                                    name="password"
                                    value={form.password}
                                    onChange={onChange}
                                    required
                                    className='rounded-xl w-[100%] px-3'
                                />

                                <div onClick={handleClick} className='flex flex-col items-center justify-center'>
                                    <Link type="botton" className='w-[80%] bg-mediumBlue rounded-2xl mt-5 font-bold text-center'>Login</Link>
                                    <p className='mt-4 mb-2'>
                                        Forgot Account Details ?
                                    </p>
                                </div>
                            </form>
                            <div>
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={({ target }) => setemail(target.value)}
                                    placeholder="Enter email"
                                />
                                <br />
                                <div className='flex items-center justify-center'>
                                    <button onClick={HandlePassword} className='w-[80%] bg-mediumBlue rounded-2xl mt-3 font-bold'>{forgotLoading ? "Loading..." : "Send Mail"}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
