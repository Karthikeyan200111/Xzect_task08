import React from 'react'

const Technology = () => {
  return (
    <section className="mt-10 lg:ml-16 lg:mr-16 lg:p-0 p-5 ">
  <div className="container mx-auto">

      <h6 className="text-red-400">WE ARE THE ULTIMATE</h6>
      <div className="flex gap-3 items-center">
          <div className="vl h-64 lg:h-28  bg-gray-400"></div>
          <div>
              <h1 className="text-3xl font-bold">A Technology Approach</h1>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
                  <div className="flex items-center">
                      <p className="text-gray-700">Our technology ensures seamless document management and accessibility.

</p>
                  </div>
                  <div className="lg:text-right lg:my-0 my-5">
                      <button type="button" className="border-solid px-6 hover:bg-black hover:text-white py-3 border-black border-2 rounded-lg">All Features</button>
                  </div>
              </div>
          </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-4 lg:flex-nowrap  gap-10 my-4">
          <div className=" hover:shadow-lg col-span-1 md:col-span-2 xl:col-span-1 flex flex-col gap-10 p-5 shadow rounded">
              <div className="iconback">
                  <img src="./assets/paper-plane.png" alt="icon" className="icon"/>
              </div>
              <h4 className="text-xl font-bold">Realtime function</h4>
              <p className="text-gray-700 text-justify">Experience immediate updates and real-time collaboration, ensuring everyone stays on the same page. Instantly see changes made by team members and streamline your workflow.</p>
          </div>
          <div className=" hover:shadow-lg col-span-1 md:col-span-2 xl:col-span-1 flex flex-col justify-between gap-10 p-5 shadow rounded">
              <div className="iconback">
                  <img src="./assets/paper-plane.png" alt="icon" className="icon"/>
              </div>
              <h4 className="text-xl font-bold">Accurate comment</h4>
              <p className="text-gray-700 text-justify">Leave precise comments and annotations on documents, improving communication. Highlight specific sections and provide detailed feedback for better document clarity.</p>
          </div>
          <div className="hover:shadow-lg col-span-1 md:col-span-2 xl:col-span-1 flex flex-col justify-between gap-10 p-5 shadow rounded">
              <div className="iconback">
                  <img src="./assets/paper-plane.png" alt="icon" className="icon"/>
              </div>
              <h4 className="text-xl font-bold">Plugins support</h4>
              <p className="text-gray-700 text-justify">Integrate with a variety of plugins to enhance functionality. Customize your document management experience by adding tools that suit your specific needs, such as project and more.</p>
          </div>
          <div className="hover:shadow-lg col-span-1 md:col-span-2 xl:col-span-1 flex flex-col justify-between gap-10 p-5 shadow rounded">
              <div className="iconback">
                  <img src="./assets/paper-plane.png" alt="icon" className="icon"/>
              </div>
              <h4 className="text-xl font-bold">All Integrations</h4>
              <p className="text-gray-700 text-justify">Connect with other tools and platforms for a smooth workflow. Whether you use Google Drive, or Microsoft Office, our seamless integrations documents are accessible and up-to-date.</p>
          </div>
      </div>
  </div>
</section>
  )
}

export default Technology