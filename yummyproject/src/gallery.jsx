import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// Import required modules
import { Autoplay, Pagination } from 'swiper';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.min.css';

// import gallery css
// import './gallery.css';

const Gallery = () => {
  const images = [
    'image/10024.jpg',
    'image/10025.jpg',
    'image/10026.jpg',
    'image/10027.jpg',
    'image/10028.jpg',
    'image/10029.jpg',
    'image/10030.jpg',
    'image/10031.jpg',
  ];

  const swiperConfig = {
    modules: [Autoplay, Pagination],
    loop: true,
    speed: 800,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
      clickable: true,
      el: '.swiper-pagination',
    },
    breakpoints: {
      640: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  };

  useEffect(() => {
    GLightbox({
      selector: '.glightbox',
      touchNavigation: true,
      loop: true,
    });
  }, []);

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-xs uppercase tracking-wider text-gray-500 mb-2">GALLERY</h2>
          <p className="text-3xl font-light">
            <span className="text-blue-600">Check </span>
            <span className="text-red-600">Our </span>
            <span className="text-blue-600">Gallery</span>
          </p>
        </div>

        <div className="relative">
          <Swiper {...swiperConfig} className="gallery-swiper">
            {images.map((image, index) => (
              <SwiperSlide key={index} className="gallery-slide">
                <a href={image} className="glightbox block relative group">
                  <div className="overflow-hidden rounded-lg shadow-lg">
                    <img 
                      src={image} 
                      alt={`Gallery image ${index + 1}`}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </a>
              </SwiperSlide>
            ))}
            <div className="swiper-pagination !-bottom-10"></div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Gallery;