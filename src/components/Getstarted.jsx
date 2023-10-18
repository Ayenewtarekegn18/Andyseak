import React from "react";

const Getstarted = () => {
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#5c5aee"
          fill-opacity="1"
          d="M0,96L80,128C160,160,320,224,480,224C640,224,800,160,960,165.3C1120,171,1280,245,1360,282.7L1440,320L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
      <div class="flex flex-col items-center justify-center min-h-screen bg-[#5c5aee]">
        <div class="bg-[#fff] pl-20 pr-20 pb-10 pl-20 rounded-md shadow-lg bg-white mb-80 -mt-80 border-2 border-[#5c5aee]">
          <h1 class="text-indigo-800 font-bold text-3xl mb-5 text-center">
            Get Started Now
          </h1>
          <p class="text-gray-600 text-lg mb-5 text-center">
            Sign up to join our community!
          </p>
          <form>
            <div class="mb-5">
              <input
                type="text"
                id="name"
                name="name"
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Full Name"
                required
              />
            </div>
            <div class="mb-5">
              <input
                type="email"
                id="email"
                name="email"
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Email"
                required
              />
            </div>
            <button
              type="submit"
              class="w-full bg-[#5c5aee] text-white py-2 px-4 rounded-md font-semibold hover:bg-indigo-600 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Getstarted;
