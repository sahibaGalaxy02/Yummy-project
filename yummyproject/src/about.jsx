import React from 'react';
import './about.css';

export default function About() {
  return (
    <>
      {/* About Section Starts */}
      <section className="about-section" id="about">
        <div className="container section-title aos-init aos-animate" data-aos="fade-up">
          <h2 className="fw-light fs-6 text-center text-secondary mt-4">ABOUT US</h2>
          <p className="text-lg h1 text-center mt-3" style={{ fontFamily: 'Amatic SC, sans-serif' }}>
            LEARN MORE <span className="text-danger">ABOUT US</span>
          </p>
          {/* Title section ends */}
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-7 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                <img className="img-fluid mb-4" src="image/10004.jpg" alt="img" />
                <div className="w-100 border border-dark border-4 text-center fw-bold fs-2">
                  <h3 className="fw-bold mt-2">Book a Table</h3>
                  <p className="text-danger">+1 5589 55488 55</p>
                </div>
              </div>
              <div className="col-lg-5 aos-init aos-animate" data-aos="fade-up" data-aos-delay="250">
                <div className="content ps-0 ps-lg-5">
                  <p className="fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </p>
                  <ul className="list-unstyled fw-500">
                    <li><span className="badge text-bg-danger rounded-pill">✓</span> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
                    <li><span className="badge text-bg-danger rounded-pill">✓</span> <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
                    <li><span className="badge text-bg-danger rounded-pill">✓</span> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</span></li>
                  </ul>
                  <p>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                    non proident
                  </p>
                  <img src="image/10004.jpg" className="img-fluid" alt="" />
                  <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About section ends */}

      {/* Why us Section starts */}
      <section className="why-us section bg-light pb-5" id="why-us">
        <div className="Container">
          <div className="row gy-4">
            <div className="col-lg-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
              <div className="Why-box bg-danger text-center text-white p-4">
                <h3 className="fw-bolder fs-3">
                  Why Choose Yummmy
                </h3>
                <p className="text-white font-weight-bold text-start ms-2 mt-3 lh-sm h4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                  Duis aute irure dolor in reprehenderitAsperiores dolores sed et.
                  Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.
                </p>
                <a className="rounded-pill mt-4">
                  <button type="button" className="btn btn-outline-light border-0 mt-4">Learn More &gt;</button>
                </a>
              </div>
            </div>
            <div className="col-lg-8 d-flex align-items-stretch why-sub-box">
              <div className="row gy-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                <div className="col-xl-4 sub1">
                  <div className="icon-box d-flex flex-column justify-content-space-around align-items-center bg-white">
                    <i className="bi bi-clipboard-data icon1"></i>
                    <h5>Corporis voluptates officia eiusmod</h5>
                    <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                  </div>
                </div>
                <div className="col-xl-4 aos-init aos-animate sub2" data-aos="fade-up" data-aos-delay="300">
                  <div className="icon-box d-flex flex-column justify-content-space-around align-items-center bg-white">
                    <i className="bi bi-gem icon2"></i>
                    <h5>Ullamco laboris ladore lore pan</h5>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                  </div>
                </div>
                <div className="col-xl-4 aos-init aos-animate sub3" data-aos="fade-up" data-aos-delay="400">
                  <div className="icon-box d-flex flex-column justify-content-space-around align-items-center bg-white">
                    <i className="bi bi-inboxes icon3"></i>
                    <h5>Labore consequatur incidid dolore</h5>
                    <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why us Section ends */}

      {/* Stats Section */}
      <div className="stats-section">
        <img src="image/10006.jpg" alt="" className="stats-bg-image" />
        <div className="container bg-none">
          <div className="row gy-4 justify-content-center">
            <div className="col-lg-3 col-md-6">
              <div className="stats-item text-center w-100 h-100">
                <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="0"
                  className="purecounter">232</span>
                <p>Clients</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="stats-item text-center w-100 h-100">
                <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="0"
                  className="purecounter">521</span>
                <p>Projects</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="stats-item text-center w-100 h-100">
                <span data-purecounter-start="0" data-purecounter-end="1453" data-purecounter-duration="0"
                  className="purecounter">1453</span>
                <p>Hours of Support</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="stats-item text-center w-100 h-100">
                <span data-purecounter-start="0" data-purecounter-end="32" data-purecounter-duration="0"
                  className="purecounter">32</span>
                <p>Workers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}