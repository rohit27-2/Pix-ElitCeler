import React from 'react';

function Gallery() {
  const imageData = [
    { src: "gallery1.jpg", alt: "Service 1" },
    { src: "gallery2.jpg", alt: "Service 2" },
    { src: "gallery7.jpg", alt: "Service 3" },
    { src: "galley4.jpg", alt: "Service 4" },
    { src: "gallery5.jpg", alt: "Service 5" },
    { src: "gallery6.jpg", alt: "Service 6" },
    { src: "gallery8.jpg", alt: "Service 6" },
    { src: "gallery9.jpg", alt: "Service 6" },
    { src: "gallery10.jpg", alt: "Service 6" },
  ];

  return (
    <div id='Gallery' className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div>
        <h2 className="text-center font-extrabold text-3xl md:text-5xl text-gray-900 sm:text-4xl">
          <span className="text-purple-700">G</span>allery
        </h2>
      </div>

      <div>
        <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {imageData.map((image, index) => (
            <li key={index}>
              <img
                src={image.src}
                alt={image.alt}
                className="border rounded-md h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Gallery;
