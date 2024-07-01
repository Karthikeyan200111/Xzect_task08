import React from 'react';

const HeroSection = () => {
  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:flex lg:flex-row">
        <div className="col lg:w-1/2 first p-4 lg:p-2 lg:ml-20">
          <h1 className="mb-6 lg:text-7xl text-3xl font-bold">The smarter way to save documents</h1>
          <p className="mb-4">
          Efficiently manage and save your documents with our advanced solutions.
          </p>
          <div className="inputbox rounded my-3 shadow flex flex-col lg:flex-row items-center justify-between p-3">
            <input
              type="text"
              placeholder="Enter your Email Address"
              className="w-full border-0 bg-transparent p-4 pl-6 text-center text-base placeholder:text-neutral-400 focus:border-0 focus:ring-0 lg:text-left"
            />
            <button type="button" className="btn bg-gray-800 text-white lg:w-40 w-full px-4 py-2 rounded-lg mt-2 lg:mt-0">
              Get A Quote
            </button>
          </div>
          <div className="lg:my-4 my-8 flex items-center">
            <h5 className="mr-2">Supported</h5>
            <div className="iconbox flex justify-between items-center gap-2 mx-5">
              <img src="/assets/windows.png" alt="windows" className="img-fluid" />
              <img src="/assets/dropbox.png" alt="dropbox" className="img-fluid" />
              <img src="/assets/hash.png" alt="hash" className="img-fluid" />
              <img src="/assets/android (1).png" alt="android" className="img-fluid" />
            </div>
          </div>
          <hr className="my-4" />
          <div className="flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between">
            <p className="flex items-center">
              <img src="/assets/check.png" alt="check" className="tick mx-1" /> Works Anywhere
            </p>
            <p className="flex items-center">
              <img src="/assets/check.png" alt="check" className="tick mx-1" /> Get Reward
            </p>
            <p className="flex items-center">
              <img src="/assets/check.png" alt="check" className="tick mx-1" /> No Hidden Fees
            </p>
          </div>
        </div>
        <div className="col lg:w-1/2 lg:mt-0 text-center lg:relative  block z-0">
          <img src="/assets/banner-image.webp" alt="banner image" className="h-auto lg:w-auto w-3/4  mt-4 mx-auto" />
          <div className=" lg:flex items-center justify-center  hidden  p-10 h-auto">
            <div className='lg:block hidden'>
              <img src="/assets/imagep1.webp" alt="ba" className="absolute  lg:block hidden bottom-72 left-4 w-56" />
            </div>
            <div className='lg:block hidden'>
              <img src="/assets/imagep2.webp" alt="ba" className="absolute lg:block hidden  top-20 right-20  w-56" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
