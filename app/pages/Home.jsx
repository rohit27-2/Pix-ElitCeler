import React from 'react';
import Image from 'next/image'
function Hero() {
  return (
    <section>
  <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
        <img
        priority={true} 
          alt="Home Image"
          src="/Hero1.svg"
          class="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div class="lg:py-24">
        <h2 class="font-extrabold text-xl md:text-5xl sm:text-xl text-gray-900 sm:text-4xl">Transform Your 
        <span class="text-purple-700"
            > Events </span
          ><br />
          with Pixieus</h2>

        <p class="mt-8 text-gray-600">
        Experience the world of LED's with us. <br />
        Entertainment Redefined.
        </p>

        <form className="mt-6">
        <div className="relative max-w-lg">
          <label className="sr-only" htmlFor="email"> Email </label>

          <input
            className="w-full rounded-full border-gray-200 bg-gray-100 p-4 pe-32 text-sm font-medium"
            id="email"
            type="email"
            placeholder="john@doe.com"
          />

          <button
            className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            Get Started
          </button>
        </div>
      </form>
      </div>
    </div>
  </div>
</section>
  );
}

export default Hero;
