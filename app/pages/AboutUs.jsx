import Image from 'next/image';
import React from 'react';

function AboutUs() {
  return (
    <section id="AboutUs" className="p-8 mt-12">
      <div className="flex justify-center">
      <h2 class="font-extrabold text-5xl md:text-5xl text-gray-900 sm:text-4xl">About<span class="text-purple-700"
            >Us</span>
         </h2>
      </div>
      <div className="flex justify-center p-5 mt-8">
        <Image src={'/aboutUs.svg'} height={100} width={150} />
      </div>
      <div className="flex justify-center">
        <p className="mt-16 text-4xl md:text-5xl sm:text-2xl font-bold">
          Lorem ipsum dolor sit amet, <br />
          <span className="text-purple-700">consectetur</span>
          adipiscing elit, <br />
          sed do
        </p>
      </div>
    </section>
  );
}

export default AboutUs;
