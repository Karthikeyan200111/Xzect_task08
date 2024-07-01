import React from 'react'

const SignupLast = () => {
  return (
    <section className="mt-10 lg:mr-20 lg:ml-20 rounded-lg lg:p-0 p-3">
    <div className="container mx-auto my-5">
        <div className="lg:flex flex-col lg:flex-row shadow items-center lg:justify-center">
            <div className="lg:w-1/2 p-4 lg:p-0 text-center lg:text-left lg:flex lg:flex-col lg:items-start lg:justify-center flex flex-col gap-10 lg:gap-8">
                <h1 className="text-3xl md:text-5xl lg:text-3xl xl:text-4xl font-bold text-center md:text-start lg:text-left mx-5">
                    Sign up and Create Your Online Store Today!
                </h1>
                <div className="flex w-10 justify-around items-center ml-5 gap-3">
                    <img src="./assets/windows.png" alt="windows" className="w-12 lg:w-auto"/>
                    <img src="./assets/dropbox.png" alt="windows" className="w-12 lg:w-auto"/>
                    <img src="./assets/hash.png" alt="windows" className="w-12 lg:w-auto"/>
                    <img src="./assets/android (1).png" alt="windows" className="w-12 lg:w-auto"/>
                </div>
                <div className="flex flex-col md:flex md:flex-row md:items-start md:justify-start  lg:flex-row gap-3 w-full justify-center lg:justify-start mt-3 lg:mr-5 lg:mx-5">
                    <button type="submit"
                        className="shadow py-2 px-4 md:w-3/12   lg:px-6 bg-black text-white rounded hover:opacity-75 text-center lg:text-left  w-full lg:w-auto">Get A
                        Quote</button>
                    <button type="submit"
                        className="shadow py-2 px-4 md:w-3/12 lg:px-6 text-center hover:bg-black hover:text-white rounded border-black border-2  lg:text-left w-full lg:w-auto">Started
                        Now</button>
                </div>
            </div>
            <div className="lg:w-1/2 hidden lg:block">
                <img src="./assets/cta-image.webp" alt="img" className="img-fluid"/>
            </div>
        </div>
    </div>
</section>
  )
}

export default SignupLast