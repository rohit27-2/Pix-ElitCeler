import Image from 'next/image';
import React from 'react';

function AboutUs() {
  return (
    <section id="about" className="p-8 mt-12">
      <div className="flex justify-center">
      <h2 class="font-extrabold text-3xl md:text-5xl text-gray-900 sm:text-4xl">About<span class="text-purple-700"
            >Us</span>
         </h2>
      </div>
      <div className="flex justify-center p-5 mt-8">
        <Image src={'/aboutUs.svg'} height={100} width={150} />
      </div>
      <div className="flex m-6 justify-center">
        <p className="mt-16 text-gray-700 ">
        Enhance any occasion with PIXIEUS's dynamic <span className="text-purple-700 font-bold"> LED Video Walls! </span> From weddings to corporate events and special gatherings,<br /> our innovative displays create captivating visual experiences,<br /> bringing your vision to life with state-of-the-art technology and unparalleled service excellence.<br />
          
          <br />
        </p>
      </div>
    </section>
  );
}

export default AboutUs;
