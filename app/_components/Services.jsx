import { GalleryHorizontal, GalleryHorizontalEndIcon, GalleryThumbnails, GalleryThumbnailsIcon } from 'lucide-react';
import Link from 'next/link';
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
          <ul className="flex flex-col mt-4 gap-4 ">
            
            <li>
                <img
                  priority={true}
                  src="gallery2.jpg"
                  alt="Service 2"
                  className="border rounded-md h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />


            </li>
            <div className=''>
            <button className='p-2 px-3 bg-purple-700  text-white rounded-lg hover:bg-purple-500' ><a href="/about">View More</a></button>
            </div>
            
          </ul>
        </center>
      </div>

    </section >
  );
}

export default Services;
