import React from 'react'

const Latest = () => {
  return (
    <section className="mt-10 lg:ml-20 lg:mr-20 p-4">
      <div className="container mx-auto">
          <h6 className="text-start text-red-400">LATEST ARTICLES</h6>
          <div className="flex lg:items-center items-start  gap-3 mt-3">
              <div className="vl h-28 bg-gray-400"></div>
              <div className="flex-1">
                  <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-4 gap-6">
                      <div className="col-span-1">
                          <h1 className="text-3xl font-bold">Take a Look at the Latest Articles from Our Blog</h1>
                      </div>
                      <div className="col-span-1 lg:text-right">
                          <button type="button" className="bg-white border-black border-2 text-black px-6 py-3 hover:bg-black hover:text-white  transition-all rounded  transition-colors">Browse All Articles</button>
                      </div>
                  </div>
              </div>
          </div>
  
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2  gap-3 mt-5">
              
              <div className="col shadow-lg my-2 p-3 rounded flex flex-col gap-10 lg:relative">
                  <div>
                      <img src="./assets/line.webp" alt="lin1" className=" z-0 w-full rounded hover:scale-75 transition-all"/>
                  </div>
                  <div className='lg:flex items-center z-10 hidden absolute top-64 left-12 '>
                    <div className='bg-white p-2 rounded-full z-10  '>
                       <img src="./assets/latest1.webp" alt="lin1" className=" rounded"/>
                    </div>
                    
                    <div className='bg-gray-100 rounded-r-lg z-0 absolute left-14 px-2 py-1 mr-3 '><p className='mr-2'>   Benjamin</p></div>
                  </div>
                  <div className="p-3">
                      <h5 className="text-xl font-semibold  hover:underline transition-all ">The Real Product From The Buyers Improvements In Overflow Basis.</h5>
                  </div>
                  <div className='bg-gray-200 rounded w-32 px-2 py-1'>
                    <p>04 Apr, 2022</p>
                  </div>
              </div>
  
             
              <div className="col shadow-lg my-2 p-3 rounded flex flex-col gap-10 lg:relative">
                  <div>
                      <img src="./assets/2 (1).webp" alt="lin1" className="w-full rounded"/>
                  </div>
                  <div className="p-3">
                      <h5 className="text-xl font-semibold hover:underline transition-all">The Real Product From The Buyers Improvements In Overflow Basis.</h5>
                  </div>
                  <div className='lg:flex items-center z-10 hidden absolute top-64 left-12 '>
                    <div className='bg-white p-2 rounded-full z-10  '>
                       <img src="./assets/daniel.webp" alt="lin1" className=" rounded"/>
                    </div>
                    
                    <div className='bg-gray-100 rounded-r-lg z-0 absolute left-14 px-2 py-1 mr-3 w-auto '><p className='mr-2'>Daniel </p></div>
                  </div>
                  <div className='bg-gray-200 rounded w-32 px-2 py-1'>
                    <p>04 Apr, 2022</p>
                  </div>
                  
              </div>
  
             
              <div className="col shadow-lg my-2 p-3 rounded flex flex-col gap-10 lg:relative">
                  <div>
                      <img src="./assets/3 (1).webp" alt="lin1" className="w-full rounded"/>
                  </div>
                 
                  <div className="p-3">
                      <h5 className="text-xl font-semibold hover:underline transition-all">The Real Product From The Buyers Improvements In Overflow Basis.</h5>
                  </div>
                  <div className='lg:flex items-center z-10 hidden absolute top-64 left-12 '>
                    <div className='bg-white p-2 rounded-full z-10  '>
                       <img src="./assets/mitchel.webp" alt="lin1" className=" rounded"/>
                    </div>
                    
                    <div className='bg-gray-100 rounded-r-lg z-0 absolute left-14 px-2 py-1 mr-3 '><p className='mr-2'> Mitchell</p></div>
                  </div>
                  <div className='bg-gray-200 rounded w-32 px-2 py-1'>
                    <p>04 Apr, 2022</p>
                  </div>
              </div>
          </div>
      </div>
  </section>
  )
}

export default Latest