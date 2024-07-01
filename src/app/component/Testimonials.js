import React from 'react'

const Testimonials = () => {
  return (
    <section className="mt-10 lg:ml-24 lg:mr-24 lg:p-0 p-4">
    <div className="container mx-auto">
      <div className="row lg:flex flex lg:flex-row flex-col gap-5 h-auto ">
        <div className="col mx-auto">
          <div>
            <p className='text-red-400'>INSPIRING TESTIMONIALS</p>
            <div className="flex items-center gap-4 my-4">
                  <div className="vl h-28 bg-gray-400"></div>
                  <h2 className="lg:text-4xl text-3xl font-bold">Take an Look at Our Customers Stories</h2>
              </div>
          </div>
          <div className="lg:flex lg:flex-col flex flex-col lg:gap-8 gap-6 p-3 mx-auto">
            <div className="row shadow  lg:flex lg:flex-row md:flex md:flex-row  gap-4 lg:w-10/12">
              <div className="col-xl-4 bg-blue-50 col-12 col-xl-4 lg:w-5/12 md:w-5/12  flex items-center justify-items-center justify-center"
                >
                <img src="./assets/Screenshot_2024-06-16_170840-removebg-preview.png" alt="sc" className=" text-center rt w-50 h-50"/>

              </div>
              <div className=" col-xl-8 col-12 col-md-12 lg:w-4/5 lg:flex lg:flex-col lg:justify-evenly lg:gap-5  p-4 ">
                <h4 className="lg:text-3xl text-xl font-bold fs-lg-0">Seamless Integration and Powerful Functionality</h4>
                <p className="my-4">"Spydea has transformed how we manage documents. The support team is outstanding."</p>
                <div>
                  <div>

                  </div>
                  <div className="flex items-center mt-3  gap-2">
                    <img src="./assets/1 (1).webp" alt="pro"/>
                    <div>
                      <h5 className="fs- font-bold fs-lg-0">Devon Lane</h5>
                      <p>VP growth at Facebook</p>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            <div className="row shadow  lg:flex flex flex-col lg:flex-row md:flex md:flex-row gap-4 lg:w-10/12">
              <div className="col-xl-4 bg-orange-50 col-12 col-xl-4 md:w-5/12 lg:w-5/12 flex items-center justify-items-center justify-center"
                >
                <img src="./assets/pic2.png" alt="sc" className=" text-center rt w-50 h-50"/>

              </div>
              <div className=" col-xl-8 col-12 col-md-12 lg:w-4/5 lg:flex lg:flex-col lg:justify-evenly lg:gap-5  p-4 ">
                <h4 className="lg:text-3xl text-xl font-bold fs-lg-0">Seamless Integration and Powerful Functionality</h4>
                <p className="my-4">"Spydea provides innovative solutions that empower our business to thrive."</p>
                <div>
                  <div>

                  </div>
                  <div className="flex items-center mt-3  gap-2">
                    <img src="./assets/guy.webp" alt="pro"/>
                    <div>
                      <h5 className="fs- font-bold fs-lg-0">Guy Hawkins</h5>
                      <p>VP growth at Facebook</p>
                    </div>

                  </div>
                </div>
              </div>
            </div>

          </div>
          <div>

          </div>

        </div>
        <div className="col ">
          <div className="lg:flex lg:flex-col lg:gap-8 flex flex-col gap-6   p-3">
            <div className="row shadow  lg:flex flex-row md:flex md:flex-row  gap-4 lg:w-10/12">
              <div className="col-xl-4 bg-red-50 col-12 md:w-5/12 col-xl-4 lg:w-5/12 flex items-center justify-items-center justify-center"
                >
                <img src="./assets/pic.png" alt="sc" className=" text-center rt w-50 h-50"/>

              </div>
              <div className=" col-xl-8 col-12 col-md-12 lg:w-4/5 lg:flex lg:flex-col lg:justify-evenly lg:gap-5  p-4 p-3">
                <h4 className="lg:text-3xl text-xl font-bold fs-lg-0">Empowering Businesses with Cutting-Edge Solutions</h4>
                <p className="my-4">"The scalability of Spydea’s services is perfect for our growing needs."</p>
                <div>
                  <div>

                  </div>
                  <div className="flex items-center mt-3  gap-2">
                    <img src="./assets/Savannah Nguyen.webp" alt="pro"/>
                    <div>
                      <h5 className="fs- font-bold fs-lg-0">Savannah Nguyen</h5>
                      <p>VP growth at Facebook</p>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            <div className="row shadow  lg:flex flex-row md:flex md:flex-row  gap-4 lg:w-10/12">
              <div className=" bg-blue-50 col-xl-4 md:w-5/12 col-12 col-xl-4 lg:w-5/12 flex items-center justify-items-center justify-center"
                >
                <img src="./assets/Screenshot_2024-06-16_170840-removebg-preview.png" alt="sc" className=" text-center rt w-50 h-50"/>

              </div>
              <div className=" col-xl-8 col-12 col-md-12 lg:w-4/5 lg:flex lg:flex-col lg:justify-evenly lg:gap-5  p-4 p-3">
                <h4 className="lg:text-3xl text-xl font-bold fs-lg-0">Revolutionizing Business with Scalable Solutions</h4>
                <p className="my-4">"Integrating Spydea into our workflow was seamless, and the features are robust."</p>
                <div>
                  <div>

                  </div>
                  <div className="flex items-center mt-3  gap-2">
                    <img src="./assets/Ronald Richards.webp" alt="pro"/>
                    <div>
                      <h5 className="fs- font-bold fs-lg-0">Ronald Richards</h5>
                      <p>VP growth at Facebook</p>
                    </div>

                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
    </section>
  )
}

export default Testimonials