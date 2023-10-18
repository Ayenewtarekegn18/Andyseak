import React from "react";

const Hero = () => {
  return (
    <>
      <section className="relative flex flex-row gap-40 justify-center items-center bg-[#5c5aee]">
        <div className="flex-1 items-center">
          <div className="relative w-24 h-24 rounded-full">
            <img
              src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=1886&amp;q=80"
              alt="Your Image"
              className="ml-40 h-100"
            />
          </div>
        </div>
        <div className="flex-1 mr-10 mt-10">
          <h2 className="font-bold text-white text-4xl mb-2">
            A Revolutionary way to Educate
          </h2>
          <p className="text-white mb-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat
            pariatur error vitae ut ipsa similique consequatur doloremque
            necessitatibus! Et numquam placeat, deserunt officiis voluptatibus
            nobis accusantium cupiditate qui quidem quo.
          </p>
          <div className="flex items-center bg-[#5c5aee]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="20" cy="20" r="10" />
              <polygon points="10 8 16 12 10 16 10 8" />
            </svg>
          </div>
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0">
          <div className="flex gap-40 text-center mt-80 pt-10 ">
            <div className="w-32 h-32   rounded-lg bg-white  bg-opacity-100 border-2 border-[#5c5aee]">
              <img
                class="py-5 h-20 pl-10 bg"
                src="https://cdn-icons-png.flaticon.com/128/6648/6648215.png"
              />
              <p class="text-[#6533FF] -my-3 font-Lato text-24 font-bold leading-29">
                {" "}
                110+ <br /> Countries
              </p>
            </div>
            <div className="w-32 h-32 rounded-lg bg-white bg-opacity-100 border-2 border-[#5c5aee] ">
              <img
                class="py-5 h-20 pl-10 bg"
                src="https://cdn-icons-png.flaticon.com/128/9352/9352122.png"
              />
              <p class="text-[#6533FF] -my-3 font-Lato text-24 font-bold leading-29">
                {" "}
                1,000,000+ <br /> Users{" "}
              </p>
            </div>
            <div className="w-32 h-32 rounded-lg bg-white bg-opacity-100 border-2 border-[#5c5aee] ">
              <img
                class="py-5 h-20 pl-10 bg"
                src="https://cdn-icons-png.flaticon.com/128/8364/8364620.png"
              />
              <p class="text-[#6533FF] -my-3 font-Lato text-24 font-bold leading-29">
                60,000+ <br /> Hours Content{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#5c5aee"
          fillOpacity="1"
          d="M0,32L80,69.3C160,107,320,181,480,197.3C640,213,800,171,960,165.3C1120,160,1280,192,1360,208L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>
    </>
  );
};

export default Hero;
