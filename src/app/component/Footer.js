import React from 'react'

const Footer = () => {
  return (
    <footer className="mt-10 bg-black text-white   ">
    <div className="container  lg:py-5 p-3 ">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between">
            <h1 className="text-3xl font-bold  mt-2 lg:ml-20">spydea</h1>
            <div className="inputbox bg-white rounded my-3 md:w-9/12 md:flex md:flex-row shadow flex flex-col lg:mr-20 lg:w-4/12 md:my-5 lg:flex-row p-3 justify-between">
                <input type="text" placeholder="Enter your Email Address" className="w-full border-0 bg-transparent p-4 pl-6   text-lg placeholder:text-neutral-400 focus:border-0 focus:ring-0 lg:text-left md:text-base"/>
                <button type="button" className="rounded w-3/4 px-4 py-2 md:w-1/2  lg:px-4 lg:py-3 btn btn-primary bg-black  text-white   btn-md">Get A Quote</button>
            </div>
        </div>
        <div className="flex flex-col lg:flex-row  md:flex md:flex-row items-center justify-center lg:gap-20  gap-10 mt-5">
            <div className="flex flex-col items-center justify-center lg:justify-start lg:mr-10 mb-5 lg:mb-0">
                <ul className="text-center flex flex-col gap-4">
                    <li className="font-bold">Company</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Pricing</li>
                </ul>
            </div>
            <div className="flex flex-col items-center justify-center lg:mr-10 mb-5 lg:mb-0">
                <ul className="text-center flex flex-col gap-4">
                    <li className="font-bold">Resources</li>
                    <li>Blog</li>
                    <li>Career</li>
                    <li>Terms & Conditions</li>
                </ul>
            </div>
            <div className="flex flex-col l gap-4 items-center justify-center mb-5 lg:mb-0">
                <h4>Email</h4>
                <h5 className="text-yellow-400 font-bold">kannankarthi737@gmail.com</h5>
            </div>
            <div className="flex flex-col items-center justify-center">
                <h4>Call US</h4>
                <h6 className="text-yellow-400 font-bold">+94746-388817</h6>
            </div>
        </div>
        <div className="text-center lg:mt-10 mt-8">
            <p>2023 Design and Developed by Karthikeyan</p>
        </div>
    </div>
  </footer>
  )
}

export default Footer