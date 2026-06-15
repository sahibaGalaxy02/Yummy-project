import React, { useEffect } from 'react';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.min.css';

const Menu = () => {
  useEffect(() => {
    GLightbox({
      selector: '.glightbox'
    });
  }, []);

  return (
    <section className="menu section z-n1" id="menu">
      <div className="container section-title" data-aos="fade-up">
        <h2 className="fw-light fs-6 text-center text-secondary mt-4">OUR MENU</h2>
        <p className="text-lg h1 text-center mt-3" style={{ fontFamily: 'Amatic SC, sans-serif' }}>
          CHECK OUR <span className="text-danger">YUMMY MENU</span>
        </p>
      </div>

      <div className="container">
        <ul className="nav nav-tabs d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100" role="tablist">
          <li className="nav-item" role="presentation">
            <a className="nav-link border-0 border-bottom border-secondary active show" data-bs-toggle="tab" data-bs-target="#menu-starters" aria-selected="true" role="tab" tabIndex="-1">
              <h4 className="text-black fs-5 fw-100">Starters</h4>
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a className="nav-link border-0 border-bottom border-secondary" data-bs-toggle="tab" data-bs-target="#menu-breakfast" aria-selected="false" role="tab" tabIndex="-1">
              <h4 className="text-black fs-5 fw-100">Breakfast</h4>
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a className="nav-link border-0 border-bottom border-secondary" data-bs-toggle="tab" data-bs-target="#menu-lunch" aria-selected="false" role="tab" tabIndex="-1">
              <h4 className="text-black fs-5 fw-100">Lunch</h4>
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a className="nav-link border-0 border-bottom border-secondary" data-bs-toggle="tab" data-bs-target="#menu-dinner" aria-selected="false" role="tab" tabIndex="-1">
              <h4 className="text-black fs-5 fw-100">Dinner</h4>
            </a>
          </li>
        </ul>

        <div className="tab-content" data-aos="fade-up" data-aos-delay="200">
          <div className="tab-pane fade active show mt-4" id="menu-starters" role="tabpanel">
            <div className="tab-header text-center">
              <p>MENU</p>
              <h3 className="text-danger fs-3">STARTERS</h3>
            </div>
            <div className="row gy-5">
              <MenuItem imgSrc="image/10003.png" title="Magnam Tiste" description="Lorem, deren, trataro, filede, nerada" price="$5.95" />
              <MenuItem imgSrc="image/10019.png" title="Aut Luia" description="Lorem, deren, trataro, filede, nerada" price="$14.95" />
              <MenuItem imgSrc="image/10020.png" title="Est Eligendi" description="Lorem, deren, trataro, filede, nerada" price="$12.95" />
              <MenuItem imgSrc="image/10021.png" title="Eos Luibusdam" description="Lorem, deren, trataro, filede, nerada" price="$10.95" />
              <MenuItem imgSrc="image/10022.png" title="Eos Luibusdam" description="Lorem, deren, trataro, filede, nerada" price="$8.95" />
              <MenuItem imgSrc="image/10023.png" title="Laboriosam Direva" description="Lorem, deren, trataro, filede, nerada" price="$16.95" />
            </div>
          </div>

          <div className="tab-pane fade" id="menu-breakfast" role="tabpanel">
            <div className="tab-header text-center">
              <p>MENU</p>
              <h3 className="text-danger fs-3">Breakfast</h3>
            </div>
            <div className="row gy-5">
              <MenuItem imgSrc="image/10003.png" title="Magnam Tiste" description="Lorem, deren, trataro, filede, nerada" price="$5.95" />
              <MenuItem imgSrc="image/10019.png" title="Aut Luia" description="Lorem, deren, trataro, filede, nerada" price="$14.95" />
              <MenuItem imgSrc="image/10020.png" title="Est Eligendi" description="Lorem, deren, trataro, filede, nerada" price="$12.95" />
              <MenuItem imgSrc="image/10021.png" title="Eos Luibusdam" description="Lorem, deren, trataro, filede, nerada" price="$10.95" />
              <MenuItem imgSrc="image/10022.png" title="Eos Luibusdam" description="Lorem, deren, trataro, filede, nerada" price="$8.95" />
              <MenuItem imgSrc="image/10023.png" title="Laboriosam Direva" description="Lorem, deren, trataro, filede, nerada" price="$16.95" />
            </div>
          </div>

          <div className="tab-pane fade" id="menu-lunch" role="tabpanel">
            <div className="tab-header text-center">
              <p>MENU</p>
              <h3 className="text-danger fs-3">Lunch</h3>
            </div>
            <div className="row gy-5">
              <MenuItem imgSrc="image/10003.png" title="Magnam Tiste" description="Lorem, deren, trataro, filede, nerada" price="$5.95" />
              <MenuItem imgSrc="image/10019.png" title="Aut Luia" description="Lorem, deren, trataro, filede, nerada" price="$14.95" />
              <MenuItem imgSrc="image/10020.png" title="Est Eligendi" description="Lorem, deren, trataro, filede, nerada" price="$12.95" />
              <MenuItem imgSrc="image/10021.png" title="Eos Luibusdam" description="Lorem, deren, trataro, filede, nerada" price="$10.95" />
              <MenuItem imgSrc="image/10022.png" title="Eos Luibusdam" description="Lorem, deren, trataro, filede, nerada" price="$8.95" />
              <MenuItem imgSrc="image/10023.png" title="Laboriosam Direva" description="Lorem, deren, trataro, filede, nerada" price="$16.95" />
            </div>
          </div>

          <div className="tab-pane fade" id="menu-dinner" role="tabpanel">
            <div className="tab-header text-center">
              <p>MENU</p>
              <h3 className="text-danger fs-3">Dinner</h3>
            </div>
            <div className="row gy-5">
              <MenuItem imgSrc="image/10003.png" title="Magnam Tiste" description="Lorem, deren, trataro, filede, nerada" price="$5.95" />
              <MenuItem imgSrc="image/10019.png" title="Aut Luia" description="Lorem, deren, trataro, filede, nerada" price="$14.95" />
              <MenuItem imgSrc="image/10020.png" title="Est Eligendi" description="Lorem, deren, trataro, filede, nerada" price="$12.95" />
              <MenuItem imgSrc="image/10021.png" title="Eos Luibusdam" description="Lorem, deren, trataro, filede, nerada" price="$10.95" />
              <MenuItem imgSrc="image/10022.png" title="Eos Luibusdam" description="Lorem, deren, trataro, filede, nerada" price="$8.95" />
              <MenuItem imgSrc="image/10023.png" title="Laboriosam Direva" description="Lorem, deren, trataro, filede, nerada" price="$16.95" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const MenuItem = ({ imgSrc, title, description, price }) => {
  return (
    <div className="col-lg-4 menu-item text-center">
      <a href={imgSrc} className="glightbox" data-gallery="menu-gallery">
        <img src={imgSrc} className="menu-img img-fluid" alt={title} />
      </a>
      <h4>{title}</h4>
      <p className="ingredients">{description}</p>
      <p className="price text-danger fw-bolder fs-3">{price}</p>
    </div>
  );
};

export default Menu;