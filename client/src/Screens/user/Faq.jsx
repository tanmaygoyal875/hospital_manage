import React from 'react'

const Faq = () => {
  return (
    <div id="faq" className='h-auto  pt-10'>
      <div className='w-full flex items-center justify-center'>
      <h1 className='text-[50px] font-bold'>FAQ</h1>
      </div>
      <div className='grid grid-cols1 grid-rows-4 gap-10 mt-10 pb-20'>
        <div className='mx-20 min-h-[100px] rounded-2xl shadow-2xl bg-white px-10 py-5'>
            <h2 className='font-bold'><span className='mr-5'>Que:</span>How can I navigate and utilize the features of your website effectively?</h2>
            <h3 className='font-md'><span className='mr-5'>Ans:</span>
To begin using our website, click on the login button. Depending on your role, choose the appropriate option - nurse, admin, or doctor. Enter your ID number and password in the provided fields to access the portal. Once inside, you'll have access to a range of features specific to your job requirements.</h3>
        </div>
        <div className='mx-20 min-h-[100px] rounded-2xl shadow-2xl bg-white px-10 py-5'>
            <h2 className='font-bold'><span className='mr-5'>Que:</span>Where can I find my ID number?</h2>
            <h3 className='font-md'><span className='mr-5'>Ans:</span>The ID number will be sent to your Gmail account when the admin adds you as a doctor, nurse, or admin. However, for testing purposes, you can use the following credentials: <span className='font-bold'>ID - 1234</span> and <span className='font-bold'>password - sahilsahil</span>. These credentials can be used to test the features available to anyone - doctors, nurses, and admins.</h3>
        </div>
        <div className='mx-20  min-h-[100px] rounded-2xl shadow-2xl bg-white px-10 py-5'>
            <h2 className='font-bold'><span className='mr-5'>Que:</span>How can I retrieve my forgotten credentials?</h2>
            <h3 className='font-md'><span className='mr-5'>Ans:</span>
            To recover your forgotten credentials, navigate to the login page and click on the "Forgot credentials" option. A pop-up window will appear where you can select your role as a doctor, nurse, or admin, and enter your email address. Your credentials will then be sent to the provided email address.</h3>
        </div>
        <div className='mx-20 min-h-[100px] rounded-2xl shadow-2xl bg-white px-10 py-5'>
            <h2 className='font-bold'><span className='mr-5'>Que:</span>What are your visiting hours?</h2>
            <h3 className='font-md'><span className='mr-5'>Ans:</span>
            
Uninterrupted care, our hospital serves you 24/7. Our committed team is available day and night, ensuring your well-being and providing timely medical assistance. Trust us to be there for you, whenever you need us.</h3>
        </div>
        
      </div>
    </div>
  )
}

export default Faq
