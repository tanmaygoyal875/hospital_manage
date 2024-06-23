// import React from 'react'
// import {
//     MenuUnfoldOutlined,
//     MenuFoldOutlined,
//     UploadOutlined,
//     UserOutlined,
//     VideoCameraOutlined,
// } from '@ant-design/icons';
// import { Button, Layout, Menu, theme } from 'antd';
// import { useState } from 'react';
// const { Header, Sider, Content } = Layout;


// const Sidebar = () => {
//     const [collapsed, setCollapsed] = useState(false);
//     const {
//         token: { colorBgContainer },
//     } = theme.useToken();
//     return (
//         <Layout>
//             <Sider className='h-[100vh]' trigger={null} collapsible collapsed={collapsed}>
//                 <div className="demo-logo-vertical" />
//                 <div className='h-[64px] w-full border'>

//                 </div>
//                 <Menu
//                     theme="dark"
//                     mode="inline"
//                     defaultSelectedKeys={['1']}
//                     // items={[
//                     //     {
//                     //         key: '1',
//                     //         icon: <UserOutlined />,
//                     //         label: 'nav 1',
//                     //     },
//                     //     {
//                     //         key: '2',
//                     //         icon: <VideoCameraOutlined />,
//                     //         label: 'nav 2',
//                     //     },
//                     //     {
//                     //         key: '3',
//                     //         icon: <UploadOutlined />,
//                     //         label: 'nav 3',
//                     //     },
//                     // ]}


//                 />
//             </Sider>
//             <Layout>
//                 <Header
//                     style={{
//                         padding: 0,
//                         background: colorBgContainer,
//                     }}
    
//                 >
//                     <Button
//                         type="text"
//                         icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
//                         onClick={() => setCollapsed(!collapsed)}
//                         style={{
//                             fontSize: '16px',
//                             width: 64,
//                             height: 64,
//                         }}
//                     />
//                     <span className='ml-[40%] text-[30px] font-bold'>Health Care</span>
//                 </Header>
//                 <Content
//                     style={{
//                         margin: '24px 16px',
//                         padding: 24,
//                         // minHeight: 280,
//                         background: colorBgContainer,
//                     }}
//                 >
//                     {/* Content */}
                    
//                 </Content>
//             </Layout>
//         </Layout>
//     );

// }

// export default Sidebar

import React, { useState } from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import { FaAmbulance } from "react-icons/fa";
import { GiNurseFemale } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
import { SlUserFollow } from "react-icons/sl";
import { BsBookmarkPlus, BsFillBookmarkCheckFill } from "react-icons/bs";
import { BiDetail } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FaHospitalUser } from "react-icons/fa";
import { TbReportMedical } from "react-icons/tb";
import { MdBedroomChild } from "react-icons/md";
import { Link } from "react-router-dom";
import { ImMenu } from "react-icons/im";
import { FiLogOut } from "react-icons/fi";
import { RiAdminLine } from "react-icons/ri";
import { TbBed } from "react-icons/tb";
import { MdDashboardCustomize } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import './Sidebar.css'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const dispatch = useDispatch();

  const {
    data: { user },
  } = useSelector((state) => state.auth);

  function toggle() {
    setIsOpen(isOpen);
  }

  return (
    <>
      <div className="overflow-y-visible sticky top-[70px]">
        <div style={{ width: isOpen ? "200px" : "70px" }} className={`sidebar`}>
          <div className="top_section">
            <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
              HMS
            </h1>
            <div
              style={{ marginLeft: isOpen ? "50px" : "0px" }}
              className="bars"
            >
              <ImMenu onClick={toggle} style={{ cursor: "pointer" }} />
            </div>
          </div>
          <div className="bottomSection">
            <Link className="link" activeclassname="active" to={"/dashboard"}>
              <div className="icon">
                <MdDashboardCustomize className="mainIcon" />
              </div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="link_text"
              >
                DashBoard
              </div>
            </Link>

            {user?.userType === "nurse" ? (
              <Link
                className="link"
                activeclassname="active"
                to={"/nurseProfile"}
              >
                <div className="icon">
                  <CgProfile className="mainIcon" />
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  Profile
                </div>
              </Link>
            ) : null}
            {user?.userType === "nurse" ? (
              <Link
                className="link"
                activeclassname="active"
                to={"/addPatient"}
              >
                <div className="icon">
                  <FaHospitalUser className="mainIcon" />
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  Add Patient
                </div>
              </Link>
            ) : null}

            {user?.userType === "nurse" ? (
              <Link
                className="link"
                activeclassname="active"
                to={"/bookAppointment"}
              >
                <div className="icon">
                  <BsBookmarkPlus className="mainIcon" />
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  Appointments
                </div>
              </Link>
            ) : null}
            {user?.userType === "admin" ? (
              <Link className="link" activeclassname="active" to={"/addDoctor"}>
                <div className="icon">
                  <AiOutlineUserAdd className="mainIcon" />
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  Add Doctor
                </div>
              </Link>
            ) : null}
            {user?.userType === "admin" ? (
              <Link className="link" activeclassname="active" to={"/addNurse"}>
                <div className="icon">
                  <GiNurseFemale className="mainIcon" />
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  Add Nurse
                </div>
              </Link>
            ) : null}
            {user?.userType === "admin" ? (
              <Link className="link" activeclassname="active" to={"/admin"}>
                <div className="icon">
                  <RiAdminLine
                    className="mainIcon"
                    style={{ color: "white" }}
                  />
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  Add Admin
                </div>
              </Link>
            ) : null}

            {user?.userType === "admin" ? (
              <Link className="link" activeclassname="active" to={"/addBeds"}>
                <div className="icon">
                  <TbBed className="mainIcon" />
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  Add Beds
                </div>
              </Link>
            ) : null}

            {user?.userType === "admin" ? (
              <Link
                className="link"
                activeclassname="active"
                to={"/addambulance"}
              >
                <div className="icon">
                  <FaAmbulance className="mainIcon" />
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  Add AMBU
                </div>
              </Link>
            ) : null}
            {/* {user?.userType === "admin" ? (
              <Link
                className="link"
                activeclassname="active"
                to={"/checkpayment"}
              >
                <div className="icon">
                  <RiSecurePaymentLine className="mainIcon" />
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  Payments
                </div>
              </Link>
            ) : null} */}

            {user?.userType === "doctor" ? (
              <Link
                className="link"
                activeclassname="active"
                to={"/doctorProfile"}
              >
                <div className="icon">
                  <SlUserFollow className="mainIcon" />
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  Profile
                </div>
              </Link>
            ) : null}
            <Link className="link" activeclassname="active" to={"/rooms"}>
              <div className="icon">
                <MdBedroomChild className="mainIcon" />
              </div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="link_text"
              >
                Beds
              </div>
            </Link>
            {user?.userType === "doctor" ? (
              <Link className="link" activeclassname="active" to={"/reports"}>
                <div className="icon">
                  <TbReportMedical className="mainIcon" />
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  Reports
                </div>
              </Link>
            ) : null}
            {user?.userType === "doctor" ? (
              <Link
                className="link"
                activeclassname="active"
                to={"/updateAppointment"}
              >
                <div className="icon">
                  <BsFillBookmarkCheckFill className="mainIcon" />
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  Appointments
                </div>
              </Link>
            ) : null}
            {user?.userType === "doctor" ? (
              <Link
                className="link"
                activeclassname="active"
                to={"/createReport"}
              >
                <div className="icon">
                  <BiDetail className="mainIcon" />
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  Create Report
                </div>
              </Link>
            ) : null}
            {/* {user?.userType === "doctor" ? (
              <Link
                className="link"
                activeclassname="active"
                to={"/patientdetails"}
              >
                <div className="icon">
                  <TbListDetails className="mainIcon" />
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  Patients
                </div>
              </Link>
            ) : null} */}

            <Link
              className="LogOutPath link"
              onClick={() => {
                dispatch({ type: "AUTH_LOGOUT" });
              }}
              to={"/dLogin"}
            >
              <div className="icon">
                <FiLogOut />
              </div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="link_text"
              >
                Logout
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
