import React from "react";

const Testimonial = () => {
  return (
    <div class="flex mt-20">
      <div class="flex-1 bg-slate-40 mb-20 ml-20 mt-10">
        <img
          class="rounded-full h-14 w-14 border-2 border-red-500 ml-40 mt-5"
          src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=1886&amp;q=80"
        />
        <img
          class="rounded-full h-20 w-20 border-2 border-blue-500 mt-20 ml-5"
          src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=1886&amp;q=80"
        />
      </div>
      <div class="flex-1 bg-slate-30">
        <h1 class="text-2xl font-bold text-indigo-900 text-center mb-5">
          Student Testimonials
        </h1>
        <p class="text-center mb-10">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit cumque
          a, ratione voluptatem asperiores sequi provident, nobis magnam atque
          tenetur, sit fuga qui sed aliquid hic obcaecati ut fugiat harum!
        </p>
        <div class="flex justify-center items-center">
          <div class="relative">
            <img
              src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=1886&amp;q=80"
              alt="Your Image"
              class="rounded-full h-20 w-20 border-2 border-green-500"
            />
            {/* <div class="absolute bg-white p-6 ml-8">
              <h1 class="text-xl font-bold">Card Title</h1>
              <p class="text-gray-600">Card Body</p>
            </div> */}
          </div>
        </div>
        <img src="" />
      </div>
      <div class="flex-1 bg-slate-00">
        <img
          class="rounded-full h-14 w-14 ml-40 border-2 border-red-500"
          src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=1886&amp;q=80"
        />
        <img
          class="rounded-full h-10 w-10 mb-20 ml-10 mt-10 border-2 border-blue-500"
          src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=1886&amp;q=80"
        />
        <img
          class="rounded-full h-14 w-14 mt-30 ml-40 border-2 border-green-500"
          src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=1886&amp;q=80"
        />
      </div>
    </div>
  );
};

export default Testimonial;
