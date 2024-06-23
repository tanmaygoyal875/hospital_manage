import React from 'react'

const Services = () => {
    return (
        <div id = "services" className='h-auto  pt-[30px] pb-20'>
            <div className='h-full w-full mt-4'>
                <div className='w-full flex justify-center items-center'>
                    <h1 className='text-[50px] font-bold'>SERVICES</h1>
                </div>
                <div className='mx-20 mt-10 pb-10'>
                <div className='grid grid-cols-1 grid-rows-1 sml:grid-cols-3 sml:grid-rows-2 gap-14'>
                    <div className='h-[200px] bg-white rounded-2xl shadow-2xl flex items-center justify-center'>
                        <h2 className='font-bold text-2xl'>Vaccine</h2>
                    </div>
                    <div className='h-[200px] bg-white rounded-2xl shadow-2xl flex items-center justify-center'>
                        <h2 className='font-bold text-2xl'>Surgery</h2>
                    </div>
                    <div className='h-[200px] bg-white rounded-2xl shadow-2xl flex items-center justify-center'>
                        <h2 className='font-bold text-2xl'>Diagnostics</h2>
                    </div>
                    <div className='h-[200px] bg-white rounded-2xl shadow-2xl flex items-center justify-center'>
                        <h2 className='font-bold text-2xl'>Emergency</h2>
                    </div>
                    <div className='h-[200px] bg-white rounded-2xl shadow-2xl flex items-center justify-center'>
                        <h2 className='font-bold text-2xl'>Radiology</h2>
                    </div>
                    <div className='h-[200px] bg-white rounded-2xl shadow-2xl flex items-center justify-center'>
                        <h2 className='font-bold text-2xl'>Laboratory</h2>
                    </div>
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default Services
