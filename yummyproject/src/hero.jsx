import React from 'react'

function Hero() {
  return (
    <>
     <div className="col-12 p-3 p-md-5" style={{ backgroundColor: '#F2F2F2', marginTop: '90px', zIndex: -1 }}>
        <div className="row">
          <div className="col-md-6 p-3 p-md-5 order-2 order-md-1" data-aos="fade-up">
            <h1 className="main-heading" style={{ fontFamily: 'Amatic SC, sans-serif' }}>
              Enjoy Your Healthy <br />
              Delicious Food
            </h1>
            <p className="blockquote my-3">We are a team of talented designers making websites with Bootstrap</p>
            <div className="mt-4">
              <button className="btn btn-danger px-4 fw-bold me-2 mb-2" style={{ borderRadius: '20px', backgroundColor: '#CE1212' }}>
                Book A Table
              </button>
              <button className="btn btn-light px-4 fw-bold mb-2" style={{ borderRadius: '20px' }}>
                <i className="bi bi-youtube me-2" style={{ color: '#CE1212' }}></i>
                Watch Video
              </button>
            </div>
          </div>

          <div className="col-md-6 text-center order-1 order-md-2 mb-4 mb-md-0" data-aos="zoom-in">
            <img src="image/10003.png" className="img-fluid foodImage" alt="Food" style={{ maxHeight: '490px', width: 'auto' }} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
