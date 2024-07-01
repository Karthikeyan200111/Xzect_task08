import React from 'react'

const Experience = () => {
  return (
    <section className="mt-10 lg:ml-20 lg:mr-20 lg:p-0 p-5">
  <div className="container mx-auto w-full  ">
      <div className="text-center my-5 flex flex-col gap-3">
          <p className="text-red-400">EXPERIENCE SPEAKS</p>
          <h4 className="text-3xl font-bold">Don't Take Our Word For It</h4>
          <p className="text-gray-700">Discover firsthand what sets us apart through the experiences of those we've had the pleasure of serving</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:flex  lg:gap-0 items-center ">
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:flex lg:flex-col md:flex md:flex-row  p-2 gap-4 lg:gap-10 lg:w-2/5 ">
              <div className="shadow p-5 rounded flex flex-col lg:gap-7 ">
                  <h4 className="text-xl font-bold">Features You will Need</h4>
                  <p className="mt-2 text-gray-700 lg:block hidden">Boost your sales with our efficient document handling.</p>
              </div>
              <div className="shadow p-5 rounded flex flex-col lg:gap-7">
                  <h4 className="text-xl font-bold">Increase Your Sales</h4>
                  <p className="mt-2 text-gray-700 lg:block hidden">Find the plan that best suits your needs and scale as you grow</p>
              </div>
              <div className="shadow p-5 rounded flex flex-col lg:gap-7">
                  <h4 className="text-xl font-bold">Choose Right Plan</h4>
                  <p className="mt-2 text-gray-700 lg:block hidden">Enhance collaboration within your team with real-time editing</p>
              </div>
          </div>
          <div className="mt-4 lg:w-full lg:ml-10 lg:mt-0  ">
              <img src="./assets/feature-tab-content-1.webp" alt="feature image" className=" w-full "/>
          </div>
      </div>
  </div>
</section>
  )
}

export default Experience