import React from 'react'

function Gallery() {
  return (
    <div className=' rounded-lg md:p-9 sm:p-5  '>
      <h2 class="px- font-extrabold text-3xl md:text-5xl text-gray-900 sm:text-xl">Previous-<span class="text-purple-700"
        >Events</span
        ></h2>
      <div className="carousel w-full mt-10 rounded-lg overflow-hidden bg-gray-100 relative 
      ">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://i.pinimg.com/564x/4e/5a/a1/4e5aa1a59e0be2c62bbb357fa56d29d8.jpg"
            className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between ">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://i.pinimg.com/564x/e5/e8/29/e5e829a5d6aa4f15fc4822bd5db5160b.jpg"
            className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://i.pinimg.com/564x/e5/e8/29/e5e829a5d6aa4f15fc4822bd5db5160b.jpg"
            className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
            className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
      <div className='mt-8'>
          <p className='font-bold'>swipe to view</p>
      </div>
    </div>
    
    
  )
}

export default Gallery