import React from "react";

const Courses = () => {
  return (
    <div class="ml-40 mr-40">
      <h1 class="flex justify-center py-4 text-3xl font-bold text-indigo-900 ">
        {" "}
        Our popular Courses
      </h1>
      <p class="px-40 scroll-py-10 mb-10">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui corporis
        eum perferendis? Accusamus aliquam provident, doloribus excepturi
        voluptates, fugit labore pariatur molestias sed iure dolorem aperiam, at
        veniam ex fuga!
      </p>

      <div class="flex rounded-lg ">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-20">
          <div class="bg-white rounded-lg  text-center">
            <img
              src="https://media.istockphoto.com/id/1300164549/photo/get-organised-get-it-done.jpg?s=1024x1024&w=is&k=20&c=zJVu1K8xrihUrS2JvyyxnRApFwqS2dXUI4PIiZoJgeQ="
              class="img-responsive rounded-lg "
            />
            <h2 class="text-xl font-bold text-center">Card 1</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              molestias amet libero rerum, doloremque ut, similique maxime ab
              beatae impedit voluptatibus ipsa possimus voluptas doloribus
              veritatis mollitia perferendis modi molestiae.
            </p>
          </div>
          <div class="bg-white rounded-lg text-center">
            <img
              class="img-responsive rounded-lg"
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
            />
            <h2 class="text-xl font-bold text-center">Card 2</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              aperiam ipsa, exercitationem corporis illo repudiandae officia
              perspiciatis quasi id odio expedita iusto, numquam fugit debitis
              delectus aliquid quisquam veniam impedit!
            </p>
          </div>
          <div class="bg-white rounded-lg text-center">
            <img
              class="img-responsive rounded-lg"
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
            />
            <h2 class="text-xl font-bold text-center">Card 3</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              consequatur sint ab, tenetur reiciendis ullam debitis! Blanditiis,
              rem praesentium omnis optio accusamus eum ut nostrum dolorem nisi
              nihil est ab!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
