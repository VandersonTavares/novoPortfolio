import React from "react";
import Spline from '@splinetool/react-spline';

import myImage from "../img/10.png";

const Home = () => {
  return (
    <div className="main-container">
      <div className="section flex justify-center" id="home">
        <div className="content text-white flex justify-between items-center h-[100vh]">
          {/* !! */}
          <div className="flex items-center overflow-hiddenbg-[#141225]">
            <div className="container  flex px-6 py-16 mx-auto">
              <div className="flex flex-col sm:w-2/3 lg:w-2/5">
                <span className="w-20 h-2 mb-12 bg-gray-800 dark:bg-white"></span>
                <h1 className="flex flex-col text-6xl font-black leading-none text-gray-800 uppercase font-bebas-neue sm:text-7xl dark:text-white">
                  Vanderson
                  <span className="text-5xl sm:text-6xl">Tavares</span>
                </h1>
                <p className="text-sm text-gray-700 sm:text-base dark:text-white">
                  Dimension of reality that makes change possible and
                  understandable. An indefinite and homogeneous environment in
                  which natural events and human existence take place.
                </p>
                <div className="flex mt-8">
                  <a
                    href="#"
                    className="px-4 py-2 mr-4 text-white uppercase bg-pink-500 border-2 border-transparent rounded-lg text-md hover:bg-pink-400"
                  >
                    Get started
                  </a>
                  <a
                    href="#"
                    className="px-4 py-2 text-pink-500 uppercase bg-transparent border-2 border-pink-500 rounded-lg dark:text-white hover:bg-pink-500 hover:text-white text-md"
                  >
                    Read more
                  </a>
                </div>
              </div>
              {/* <div className="sm:block sm:w-1/3 lg:w-3/5">
                <img src={myImage} className="max-w-xs m-auto md:max-w-sm" />
              </div> */}
              <div className="w-[600px] h-[600px]">
                
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* !----! */}
      <div className="section flex justify-center bg-[#6244c5]" id="aboutme">
        <div className="content text-white flex justify-between items-center w-[50vw] min-h-[100vh]">
          <div className="box bg-[#ffc448]">
            <div className="left w-[15.625rem] h-[250px] relative overflow-hidden">
              <h1 className="inline-block font-bold text-[350px] text-[#6244c5] absolute bottom-[-100px] left-[100px] ">
                2
              </h1>
            </div>
            <div className="text-center text-[22px] font-bold text-white">
              <p>Years of Experience</p>
            </div>
            <div className="name text-center overflow-hidden">
              <h1 className="text-[40px] text-[#6244c5] font-bold relative bottom-[-20px]">
                VANDERSON
              </h1>
            </div>
          </div>

          <div className="right w-[34.375rem] h-[21.875rem] flex">
            <div className="element ml-[50px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="86"
                height="84"
                viewBox="0 0 86 84"
                fill="none"
                class="svg replaced-svg"
              >
                <path
                  d="M69.0582 4.99535C65.3229 5.61907 55.8542 10.8508 56.4184 19.5008M56.4184 19.5008C56.5793 21.9679 56.8094 25.1691 59.6334 27.5088C62.587 29.9561 68.4982 24.1091 56.4184 19.5008ZM56.4184 19.5008C49.582 17.0957 34.9948 15.9707 31.3373 30.7119C29.092 42.3255 34.8382 56.3213 37.9206 65.5494C30.8166 54.4724 12.9204 41.5234 3.33571 40.3222"
                  stroke="#FED546"
                  stroke-width="3"
                ></path>
                <path
                  d="M67.8098 9.30162L68.8675 4.76205L64.3162 3.75612L64.6426 2.35513L70.5986 3.67151L69.2144 9.61209L67.8098 9.30162Z"
                  fill="#FED546"
                ></path>
                <path
                  d="M26.009 78.4559C26.089 77.1822 26.6883 73.8048 28.4447 70.4841"
                  stroke="#FED546"
                  stroke-width="3"
                ></path>
                <path
                  d="M4.8413 78.3261C8.24607 74.6684 16.8723 66.8695 24.1393 64.9358"
                  stroke="#FED546"
                  stroke-width="3"
                ></path>
                <path
                  d="M55.3976 5.34016C53.6747 5.2429 50.2912 8.86138 51.3227 12.4565"
                  stroke="#FED546"
                  stroke-width="3"
                ></path>
              </svg>
            </div>
            <div className="main-title">
              <h3 className="font-bold text-[26px] mb-3">About Me</h3>
              <p className="text-[16px] text-[#cbc1ec]">
                With 2 years experience as a professional Web developer, I have
                acquired the skills and knowledge necessary to make your project
                a success. I enjoy every step of the design process, from
                discussion and collaboration.
              </p>
              <div className="flex mt-[70px]">
                <a href="#home">
                  <div className="button bg-white text-black rounded-md p-4 text-[25px]">
                    Download Cv
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* !----! */}
      {/* !----! */}
      <div className="section border flex justify-center" id="projects">
        <div className="content border text-white flex justify-between items-center w-[50vw] min-h-[100vh]">
          <div className="left border">
            <h1>Vanderson</h1>
          </div>
          <div className="right border">
            <h2>Tavares</h2>
          </div>
        </div>
      </div>
      {/* !----! */}
      {/* !----! */}
      <div className="section border flex justify-center" id="contact">
        <div className="content border text-white flex justify-between items-center min-w-[100vw] min-h-[70vh]">
        <Spline scene="https://prod.spline.design/PXZKwWdjyq2MLjrw/scene.splinecode" />
        </div>
      </div>
      {/* !----! */}
    </div>
  );
};

export default Home;
