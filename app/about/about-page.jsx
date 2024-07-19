import React from 'react'

function Gallery() {
  return (
    
        <section id='Gallery'>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header>
          <h2 class="text-center font-extrabold text-3xl md:text-5xl text-gray-900 sm:text-4xl"><span class="text-purple-700"
          >G</span>
            allery

          </h2>

        </header>
        <center>
          <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <li>
                <img
                  priority={true}
                  src="gallery1.jpg"
                  alt="Service 1"
                  className="border rounded-md h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />


            </li>
            <li>
                <img
                  priority={true}
                  src="gallery2.jpg"
                  alt="Service 2"
                  className="border rounded-md h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />


            </li>


            <li>
                <img
                priority={true}
                  src="gallery3.jpg"
                  alt="Service 3"
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px] border rounded-md"
                />


            </li>

            <li>
                <img
                priority={true}
                  src="galley4.jpg"
                  alt="Service 4"
                  className="border rounded-md h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />


            </li>
            <li>
                <img
                  priority={true}
                  src="gallery5.jpg"
                  alt="Service 5"
                  className="border rounded-md h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />


            </li>
            <li>
                <img
                  priority={true}
                  src="gallery6.jpg"
                  alt="Service 6"
                  className="border rounded-md h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />


            </li>
          </ul>
        </center>
      </div>

    </section >
    
  )
}

export default Gallery