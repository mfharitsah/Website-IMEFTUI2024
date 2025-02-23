import React from 'react'
import whatsapp from '../assets/contacts/whatsapp.png'
import email from '../assets/contacts/email.png'
import komin from '../assets/contacts/komin.webp'
import instagram from '../assets/contacts/instagram.png'
import linkedin from '../assets/contacts/linkedin.png'
import x from '../assets/contacts/x.png'

const Contacts = () => {

  const textGrandientStyle = "text-blue-1 text-opacity-0 bg-gradient-to-b from-blue to-blue-1 bg-clip-text inline-block";
  const bgGrandientStyle = "bg-blue-1 bg-opacity-0 bg-gradient-to-b from-blue to-blue-1";

  return (
    <div className='container w-full min-h-screen flex flex-col justify-center lg:flex-row items-center gap-10 lg:pl-20 my-20 max-lg:pt-16'>
      <div className='w-full lg:w-3/5 h-fit flex flex-col text-light gap-5 border'>
        <p className={`font-bold text-center lg:text-start text-3xl lg:text-5xl`}>Reach our Contact Persons!</p>
        <p className='text-center lg:text-start text-xs md:text-sm lg:text-base'>We are here to help! Whether it’s a question, suggestion, or collaboration request, our team is ready to assist you.
        </p>

        <div className='w-full h-fit flex flex-col md:flex-row items-center justify-center lg:justify-start gap-0 lg:gap-5 max-lg:mt-5'>
          <div className={`harris ${bgGrandientStyle} w-fit h-fit flex flex-col p-3 rounded-lg max-lg:scale-75`}>
            <div className='flex gap-1 items-center'>
              <p className='text-3xl font-semibold'>Harris</p>
              <p className='text-base font-semibold mt-2'>(TKom'22)</p>
            </div>
            <div className='list-contact ml-3'>
              <div className='whatsapp flex items-center gap-2'>
                <img src={whatsapp} className='w-3 h-3' alt="" />
                <p>082130227727</p>
              </div>
              <div className='email flex items-center gap-2'>
                <img src={email} className='w-3 h-3' alt="" />
                <p>harristfhs@gmail.com</p>
              </div>
            </div>
          </div>

          <div className={`kania ${bgGrandientStyle} w-fit h-fit flex flex-col p-3 rounded-lg max-lg:scale-75`}>
            <div className='flex gap-1 items-center'>
              <p className='text-3xl font-semibold'>Kania</p>
              <p className='text-base font-semibold mt-2'>(TKom'22)</p>
            </div>
            <div className='list-contact ml-3'>
              <div className='whatsapp flex items-center gap-2'>
                <img src={whatsapp} className='w-3 h-3' alt="" />
                <p>081511930489</p>
              </div>
              <div className='email flex items-center gap-2'>
                <img src={email} className='w-3 h-3' alt="" />
                <p>kaniaafirka@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className='w-full flex flex-col items-center lg:items-start gap-1 mt-10 max-lg:items-center'>
          <div className={`${bgGrandientStyle} w-3/5 h-2 `}></div>
          <p className={`font-bold text-center lg:text-start text-2xl lg:text-5xl italic`}>Share Your Poster on Our Instagram!</p>
          <p className='w-4/5 lg:w-3/5 text-xs lg:text-sm text-center lg:text-start'>Use the link below to let us know your request, and we'll ensure your message reaches the right audience!</p>
          <a href='https://bit.ly/EKSTERNALIME2024' className={`${bgGrandientStyle} w-fit text-lg mt-2 py-1 px-4 font-semibold rounded-lg`} >Submit Your Request</a>
        </div>

        <div className='flex flex-col items-center lg:items-start gap-1 mt-10'>
          <div className={`${bgGrandientStyle} w-[40%] h-2 `}></div>
          <p className={`font-bold text-3xl italic`}>Follow Our Socials!</p>
          <div className='flex gap-2'>
            <a href="https://www.instagram.com/imeftui/"><img src={instagram} alt="" /></a>
            <a href="https://id.linkedin.com/company/ikatan-mahasiswa-elektro-ftui-ime-ftui"><img src={linkedin} alt="" /></a>
            <a href="https://x.com/IMEFTUI"><img src={x} alt="" /></a>
          </div>
        </div>

      </div>

      <div className='w-2/5 h-full max-lg:hidden'>
        <img src={komin} className='bg-contain rounded-lg' alt="" />
      </div>
    </div>
  )
}

export default Contacts