import React from 'react'

const Collaboration = () => {
  return (
    <section className="mt-10 lg:ml-20 lg:mr-20">
  <div className="container lg:p-0 p-5 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="col-span-1 lg:col-span-1">
              <p className="text-red-400">COLLABORATIVE SOLUTIONS</p>
              <div className="flex items-center gap-4 my-4">
                  <div className="vl h-28 bg-gray-400"></div>
                  <h2 className="lg:text-5xl text-3xl font-bold">Choose the Right Plan for Your Team</h2>
              </div>
              <p className="mt-2 text-gray-700">Select the plan that fits your team’s requirements and collaborate effectively. Scale your plan as your team grows, ensuring you have the tools you need at every stage. Create dedicated workspaces for different teams and projects. Facilitate better organization and collaboration with centralized document storage and task management.</p>
          </div>
          <div className="col-span-1 lg:col-span-1">
              <img src="./assets/feature-2.webp" alt="ft" className="w-full h-auto"/>
          </div>
      </div>
  </div>
</section>
  )
}

export default Collaboration