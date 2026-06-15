import React from 'react';

export default function Events() {
  return (
    <section className="Events section" id="events">
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
            aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
            aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
            aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3"
            aria-label="Slide 4"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="image/10014.jpg" className="d-block w-100" alt="Custom Parties" />
            <div className="carousel-caption d-none d-md-block">
              <h2 className="display-5 fw-bolder" style={{ fontFamily: "Indie Flower, system-ui" }}> CUSTOM Parties</h2>
              <div className="fs-2 border-bottom border-4 border-danger fw-bolder">$99</div>
              <p className="fw-bold">
                Quo corporis voluptas ea ad. Consectetur inventore sapiente ipsum voluptas eos omnis facere. Enim
                facilis veritatis id est rem repudiandae nulla expedita quas.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="image/10015.jpg" className="d-block w-100" alt="Wedding Parties" />
            <div className="carousel-caption d-none d-md-block">
              <h2 className="display-5 fw-bolder" style={{ fontFamily: "Indie Flower, system-ui" }}>WEDDING Parties</h2>
              <div className="fs-2 border-bottom border-4 border-danger fw-bolder">$899</div>
              <p className="fw-bold">
                Laborum aperiam atque omnis minus omnis est qui assumenda quos. Quis id sit quibusdam. Esse quisquam
                ducimus officia ipsum ut quibusdam maxime. Non enim perspiciatis.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="image/10016.jpg" className="d-block w-100" alt="Birthday Parties" />
            <div className="carousel-caption d-none d-md-block">
              <h2 className="display-5 fw-bolder" style={{ fontFamily: "Indie Flower, system-ui" }}> BIRTHDAY Parties</h2>
              <div className="fs-2 border-bottom border-4 border-danger fw-bolder">$499</div>
              <p className="fw-bold">
                Laborum aperiam atque omnis minus omnis est qui assumenda quos. Quis id sit quibusdam. Esse quisquam
                ducimus officia ipsum ut quibusdam maxime. Non enim perspiciatis.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="image/10017.jpg" className="d-block w-100" alt="Private Parties" />
            <div className="carousel-caption d-none d-md-block">
              <h2 className="display-5 fw-bolder" style={{ fontFamily: "Indie Flower, system-ui" }}>PRIVATE Parties</h2>
              <div className="fs-2 border-bottom border-4 border-danger fw-bolder">$289</div>
              <p className="fw-bold">
                In delectus sint qui et enim. Et ab repudiandae inventore quaerat doloribus. Facere nemo vero est ut
                dolores ea assumenda et. Delectus saepe accusamus aspernatur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
