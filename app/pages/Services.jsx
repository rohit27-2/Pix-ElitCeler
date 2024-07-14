import React from 'react';

function Services() {
  return (
    <section id="Services" className="p-8 mt-12">
      <div className="flex justify-center p-5 mt-8">
      <h2 class="font-extrabold text-5xl md:text-5xl text-gray-900 sm:text-4xl"><span class="text-purple-700"
            >S</span
          >ervices</h2>
      </div>
      <div className="m-5 mt-8 flex justify-around">
        <div className='p-2'>
          <img style={{ width: '19rem' }} className="rounded-lg" src="https://i.pinimg.com/564x/80/50/d3/8050d35695a7b2f645238cd411ecbb73.jpg" alt="Service 1" />
          <center>
            <h1 className="font-extrabold text-purple-700">LED DETAILS</h1>
          </center>
        </div>
        <div className='p-2'>
          <img style={{ width: '19rem' }} className="rounded-lg" src="https://i.pinimg.com/236x/11/78/3f/11783f76b2d0ac4080cc021d03954e40.jpg" alt="Service 2" />
          <center>
            <h1 className="font-extrabold text-purple-700">LED DETAILS</h1>
          </center>
        </div>
        <div className='p-2'>
          <img style={{ width: '19rem' }} className="rounded-lg" src="https://i.pinimg.com/564x/1f/77/11/1f77119486a3e091efd2c7d856b48551.jpg" alt="Service 3" />
          <center>
            <h1 className="font-extrabold text-purple-700">LED DETAILS</h1>
          </center>
        </div>
      </div>
    </section>
  );
}

export default Services;
