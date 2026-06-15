import React from 'react';

export default function Testimonial() {
  return (
    <section id="testimonials" className="testimonials section bg-light pt-5 text-center">
      <div className="container section-title" data-aos="fade-up">
        <h2 className="fw-100 fs-6 mt-6">TESTIMONIALS</h2>
        <p className="h1" style={{ fontFamily: 'Amatic SC, sans-serif' }}>
          What Are They
          <span className="description-title text-danger"> Saying About Us</span>
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="image/Screenshot 2024-09-08 203907.png" className="d-block w-100" alt="Testimonial 1" />
            </div>
            <div className="carousel-item">
              <img src="image/Screenshot 2024-09-08 203957.png" className="d-block w-100" alt="Testimonial 2" />
            </div>
            <div className="carousel-item">
              <img src="image/Screenshot 2024-09-08 204008.png" className="d-block w-100" alt="Testimonial 3" />
            </div>
            <div className="carousel-item">
              <img src="image/Screenshot 2024-09-08 204017.png" className="d-block w-100" alt="Testimonial 4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}