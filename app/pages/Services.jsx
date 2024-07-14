import React from 'react';

function Services() {
  return (
    <section id='services'>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header>
          <h2 class="font-extrabold text-3xl md:text-5xl text-gray-900 sm:text-4xl"><span class="text-purple-700"
          >S</span>
            ervices

          </h2>

        </header>
        <center>
          <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <li>
              <a href="#" className="group block overflow-hidden">
                <img
                  src="https://i.pinimg.com/564x/a5/0c/cc/a50cccc2ecdde5793090768ec2f07c35.jpg"
                  alt=""
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />


              </a>
            </li>


            <li>
              <a href="#" className="group block overflow-hidden">
                <img
                  src="https://i.pinimg.com/564x/a5/0c/cc/a50cccc2ecdde5793090768ec2f07c35.jpg"
                  alt=""
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />


              </a>
            </li>

            <li>
              <a href="#" className="group block overflow-hidden">
                <img
                  src="https://i.pinimg.com/564x/a5/0c/cc/a50cccc2ecdde5793090768ec2f07c35.jpg"
                  alt=""
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />


              </a>
            </li>
          </ul>
        </center>
      </div>

    </section >
  );
}

export default Services;
