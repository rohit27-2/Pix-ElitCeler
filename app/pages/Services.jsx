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
                  priority={true}
                  src="demo1.png"
                  alt="Service 1"
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />


              </a>
            </li>


            <li>
              <a href="#" className="group block overflow-hidden">
                <img
                priority={true}
                  src="demo2.png"
                  alt="Service 2"
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />


              </a>
            </li>

            <li>
              <a href="#" className="group block overflow-hidden">
                <img
                priority={true}
                  src="demo1.png"
                  alt="Service 3"
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
