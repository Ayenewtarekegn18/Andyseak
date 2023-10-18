import React from "react";
import "./Benefits.css";

const Benefits = () => {
  return (
    <div class="bg-[#5c5aee] h-200 flex flex-row gap-40 mb-10 mt-20 pb-5">
      <div class="flex ml-40 -mt-12">
        <div className="relative w-48 h-48">
          <img
            src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=1886&amp;q=80"
            alt="Circle 1"
            className="circle circle1 "
          />

          <img
            src="https://media.istockphoto.com/id/1300164549/photo/get-organised-get-it-done.jpg?s=1024x1024&w=is&k=20&c=zJVu1K8xrihUrS2JvyyxnRApFwqS2dXUI4PIiZoJgeQ="
            alt="Circle 2"
            className="circle circle2 h-22 w-22"
          />
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
            alt="Circle 3"
            className="circle circle3"
          />
          <img
            src="https://media.istockphoto.com/id/1443543154/photo/smiling-mature-woman-standing-in-a-park-outdoors-in-the-summertime.webp?b=1&s=170667a&w=0&k=20&c=otGMUIJw-3YCvl-7sgOVq7OEzAHRRy1TQzMnPeDjl4k="
            alt="Circle 4"
            className="circle circle4"
          />
          <img
            src="https://media.istockphoto.com/id/1444291518/photo/black-woman-working-from-home-office.webp?b=1&s=170667a&w=0&k=20&c=W80d5TxErOfCAzn34x3njs0qFWfRoPV9JQlhHkePAcU="
            alt="Circle 5"
            className="circle circle5"
          />
          <img
            src="https://media.istockphoto.com/id/1444291518/photo/black-woman-working-from-home-office.webp?b=1&s=170667a&w=0&k=20&c=W80d5TxErOfCAzn34x3njs0qFWfRoPV9JQlhHkePAcU="
            alt="Circle 5"
            className="circle circle6"
          />
          <img
            src="https://media.istockphoto.com/id/1496377580/photo/group-of-people-applauding.webp?b=1&s=170667a&w=0&k=20&c=K7a01h_A6DTVWnwGfECT6biDAFvUJuZwMzWToHfYxJc="
            alt="Circle 5"
            className="circle circle7"
          />
        </div>
        <div className="w-32 h-32 mr-70 -ml-80 -mt-0 rounded-full bg-[#5c5aee] bg-opacity-0 border-8 border-[#fff4] "></div>
        <div className="w-12 h-12 mr-50 -ml-36 mt-28 rounded-full bg-[#5c5aee] bg-opacity-0 border-8 border-[#fff4] "></div>
      </div>
      <div class="geid grid-flow-row ml-64">
        <h1 class="text-3xl font-bold ml-10 mb-10 mt- text-white">
          Benefits from our Learning platforms
        </h1>
        <div class="grid grid-flow-col gap-20">
          <img
            class="py-5 h-20 pl-5 pr-5 ml-10 bg-white rounded-full items-center"
            src="https://cdn-icons-png.flaticon.com/128/11179/11179971.png"
          />
          <div>
            <h1 class="text-white font-bold text-lg">
              Accent Reduction lessons{" "}
            </h1>
            <p class=" text-white mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              quasi facere praesentium unde tenetur aliquid ipsa error minus
            </p>
          </div>
        </div>
        <div class="grid grid-flow-col gap-20">
          <img
            class="py-5 h-20 pl-5 pr-5 ml-10 bg-white rounded-full items-center"
            src="https://cdn-icons-png.flaticon.com/128/9876/9876886.png"
          />
          <div>
            <h1 class="text-white font-bold text-lg">Quizzes and Games </h1>
            <p class="pt-2 text-white mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              quasi facere praesentium unde tenetur aliquid ipsa error minus
            </p>
          </div>
        </div>
        <div class="grid grid-flow-col gap-20 mb-10">
          <img
            class="py-5 h-20 pl-5 pr-5 ml-10 bg-white rounded-full items-center"
            src="https://cdn-icons-png.flaticon.com/128/1946/1946429.png"
          />
          <div>
            <h1 class="text-white font-bold text-lg">Expert Training </h1>
            <p class=" text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              quasi facere praesentium unde tenetur aliquid ipsa error minus
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
