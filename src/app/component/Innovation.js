import React from 'react'

const Innovation = () => {
  return (
    <section className="lg:mt-10 mt-5">
  <div className="container mx-auto lg:p-0 p-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="col-span-1 lg:col-span-1">
              <img src="./assets/feature-1.webp" alt="ft" className="w-full h-auto"/>
          </div>
          <div className="col-span-1 lg:col-span-1">
              <p className="text-red-400">INNOVATIVE STRATEGIES</p>
              <div className="flex items-center gap-4 my-4 lg:w-3/5">
                  <div className="vl h-28 bg-gray-400"></div>
                  <h2 className="text-4xl font-bold">Take Your Marketing to the Next Level.</h2>
              </div>
              <p className="mt-2 text-gray-700">Utilize our solutions to enhance your marketing efforts. Leverage advanced analytics to understand customer behavior and tailor your campaigns for maximum impact. Create highly targeted marketing campaigns with precise segmentation. Use data-driven insights to reach the right audience at the right time, increasing conversion rates.</p>
          </div>
      </div>
  </div>
</section>
  )
}

export default Innovation