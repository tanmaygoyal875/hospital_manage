import React from 'react';
import { medLogo } from '../../assets/index';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div id="home" className="w-full mb-[80px] h-[600px] flex items-center justify-center">
        <div className="h-[80%] w-[80%] border flex bg-white rounded-2xl shadow-2xl">
          <div className="w-1/2 h-full transform transition duration-500 hover:scale-125 flex flex-col justify-center items-center flex-wrap">
            <h1 className="text-[30px] font-bold">Welcome to</h1>
            <h1 className="text-[50px] font-bold">MEDICARE</h1>
            <p className="text-[20px] text-gray-400">GROUP 2</p>
            <div className="mt-4">
              {/* Add more name and roll number fields here */}
              <div className='flex text-2xl'>
                <div className='mx-9'>
                <p className="text-[20px] text-gray-400">Aditya Sahu</p>
                <p className="text-[20px] text-gray-400">Naviket Mankoo</p>
                <p className="text-[20px] text-gray-400">Subham</p>
                <p className="text-[20px] text-gray-400">Akshit Singh</p>
                <p className="text-[20px] text-gray-400">Jagpreet</p>
                </div>
                <div>
                <p className="text-[20px] text-gray-400">2021MCB1228</p>
                <p className="text-[20px] text-gray-400">2021MCB1239</p>
                <p className="text-[20px] text-gray-400">2021MCB1248</p>
                <p className="text-[20px] text-gray-400">2021MCB1229</p>
                <p className="text-[20px] text-gray-400">2019MCB1111</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2 h-full pt-3">
            <img src={medLogo} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

// import React from 'react'
// import { medLogo } from '../../assets/index';
// import {Link} from 'react-router-dom'
// const Home = () => {
//     return (
//         <>
//             <div id = "home" className='w-full mb-[80px] h-[600px] flex items-center justify-center '>
//                 <div className='h-[80%] w-[80%] border flex bg-white rounded-2xl shadow-2xl'>
//                     <div className="w-1/2 h-full transform  transition duration-500 hover:scale-125  flex flex-col justify-center items-center flex-wrap">
//                         <h1 className='text-[30px] font-bold'>
//                             Welcome to
//                         </h1>
//                         <h1 className='text-[50px] font-bold'>
//                             MEDICARE
//                         </h1>
//                         <p className='text-[20px] text-gray-400'>
//                             GROUP 2
//                         </p>
//                     </div>
//                     <div className='w-1/2 h-full pt-3'>
//                         <img src={medLogo} alt="" />
//                     </div>
//                 </div>
//             </div>
//         </>


//     );
// }

// export default Home
