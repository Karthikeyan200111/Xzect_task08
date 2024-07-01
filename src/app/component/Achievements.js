import React from 'react'

const Achievements = () => {
  return (
    <section className="py-10">
  <div className="container mx-auto p-5">
      <div className="text-center my-5 flex flex-col items-center gap-3">
          <p className="text-red-400">ACHIEVING EXCELLENCE</p>
          <h4 className="text-3xl font-bold">A Few Numbers We are Proud</h4>
          <p className="text-gray-700">Our team has successfully completed 500+ projects, delivering innovative solutions that exceed expectations</p>
      </div>
      <div className="grid grid-cols-1 lg:flex lg:ml-28 lg:mr-28 lg:flex-row lg:flex-wrap md:flex mx-auto md:p-10 md:items-center md:justify-evenly lg:justify-center lg:items-center gap-4 lg:p-3 p-5 shadow rounded my-3">
          <div className="flex flex-col items-center justify-center">
              <h1 className="lg:text-7xl text-4xl font-semibold">94%</h1>
              <p>Client Retention</p>
          </div>
          <div className="line lg:block hidden mx-4 border-b border-gray-300"></div>
          <div className="flex flex-col items-center justify-center">
              <h1 className="lg:text-7xl text-4xl font-semibold">70M+</h1>
              <p>Emails Per Month</p>
          </div>
          <div className="line lg:block hidden mx-4 border-b border-gray-300"></div>
          <div className="flex flex-col items-center justify-center">
              <h1 className="lg:text-7xl text-4xl font-semibold">10K+</h1>
              <p>Monthly Campaigns</p>
          </div>
      </div>
  </div>
</section>
  )
}

export default Achievements