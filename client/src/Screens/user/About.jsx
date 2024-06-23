import React from 'react'
import { FaAmbulance } from "react-icons/fa";
import { MdPersonAdd } from "react-icons/md";
import { FaBed } from "react-icons/fa";
import { FaUserNurse } from "react-icons/fa";

const About = () => {
  return (
    <div id="about" className='mb-[100px]'>
      <div className='w-full h-auto py-[100px] flex flex-col sml:flex-row items-center '>
        <div className='w-full sml:w-1/2 h-full flex justify-center items-center bg-[rgb(245,245,245)]'>
            <h1 className='font-bold text-[50px]'>ABOUT US</h1> 
        </div>
        <div className='w-full sml:w-1/2 h-auto bg-white rounded-2xl shadow-2xl sml:mr-20 px-10 py-10'>
            <div className='w-full flex flex-col flex-wrap'>
                <h2 className='w-full font-bold text-xl align-center mb-5'>Caring Hearts, Healing Hands: Where Compassion Meets Healthcare</h2>
                {/* <h2 className='w-full font-bold text-xl'>Hospital Center</h2> */}
                <p className='mt-2'>We provide the special tips and advice's of heath care treatment and high level of best technology involve in the our hospital.</p>
                <p className='mt-2'>We never compromise on the quality of our care for you.</p>
                <p className='mt-2'>It is practically a home away from home, with a little extra.</p>
                <p className='mt-2'>We set the standards for healthcare, surgery, and medicine.</p>
                <div className='w-full flex flex-col mt-8'>
                    <div className='w-full flex'>
                        <div className='w-1/2 bg-[rgb(245,245,245)] rounded h-[50px] flex items-center px-4 font-bold mr-3 flex-wrap'>
                            <FaAmbulance size={40} className='mr-10'/>
                            Emergency Help
                        </div>
                        <div className='w-1/2 bg-[rgb(245,245,245)] rounded h-[50px] flex items-center px-4 font-bold mr-3 flex-wrap'>
                        <MdPersonAdd size={40} className='mr-10'/>
                            Qualified Doctors
                        </div>
                    </div>
                    <div className='w-full flex mt-5'>
                        <div className='w-1/2 bg-[rgb(245,245,245)] rounded h-[50px] flex items-center px-4 font-bold mr-3 flex-wrap'>
                        <FaUserNurse size={40} className='mr-10'/>
                            Best Professionals
                        </div>
                        <div className='w-1/2 bg-[rgb(245,245,245)] rounded h-[50px] flex items-center px-4 font-bold mr-3 flex-wrap    '>
                            <FaBed size={40} className='mr-10'/>
                            Medical Treatment
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
