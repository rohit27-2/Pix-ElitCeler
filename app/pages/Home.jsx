import React from 'react';
import Image from 'next/image'
function Hero() {
  return (
    <section>
  <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
        <img
          alt=""
          src="https://i.pinimg.com/564x/a5/0c/cc/a50cccc2ecdde5793090768ec2f07c35.jpg"
          class="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div class="lg:py-24">
        <h2 class="font-extrabold text-5xl md:text-5xl sm:text-2xl text-gray-900 sm:text-4xl">Lorem ipsum dolor sit amet,<span class="text-purple-700"
            >consectetur</span
          ><br />
          adipiscing elit, sed do</h2>

        <p class="mt-4 text-gray-600">
        Experience the world of LED's with us. <br />
        Entertainment Redefined.
        </p>

        <form>
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >Search</label
            >
            <div class="relative mt-8">
              <div
                class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
              >
                <svg
                  width="21"
                  height="22"
                  viewBox="0 0 21 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.5">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M14.8221 3.10179C15.9955 3.10179 17.1242 3.55704 17.9546 4.37391C18.7859 5.18907 19.2505 6.28854 19.2505 7.43954V14.2253C19.2505 16.6218 17.2642 18.5631 14.8221 18.5631H6.17799C3.73586 18.5631 1.75049 16.6218 1.75049 14.2253V7.43954C1.75049 5.04304 3.72711 3.10179 6.17799 3.10179H14.8221ZM16.2142 8.71939L16.2842 8.65068C16.4934 8.40158 16.4934 8.04081 16.2746 7.79172C16.153 7.66373 15.9859 7.58557 15.8117 7.56839C15.628 7.55894 15.453 7.61992 15.3209 7.74018L11.3755 10.8324C10.868 11.2456 10.1409 11.2456 9.6255 10.8324L5.68799 7.74018C5.41586 7.54262 5.03961 7.56839 4.81299 7.80031C4.57674 8.03223 4.55049 8.40158 4.75086 8.65927L4.86549 8.77093L8.84675 11.8202C9.33675 12.1982 9.93087 12.4043 10.553 12.4043C11.1734 12.4043 11.778 12.1982 12.2671 11.8202L16.2142 8.71939Z"
                      fill="#191825"
                      fill-opacity="0.75"
                    />
                  </g>
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your email"
                required
              />
              <button
                type="submit"
                class="text-white absolute right-2.5 bottom-2.5 bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 "
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
