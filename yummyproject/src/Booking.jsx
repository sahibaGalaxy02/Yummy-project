import React, { useState, useEffect } from 'react';

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    people: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState(null);

  useEffect(() => {
    console.log('Form data changed:', formData);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ type: 'success', message: 'Booking successful! We will contact you shortly.' });
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      people: '',
      message: ''
    });

    setTimeout(() => setFormStatus(null), 5000);
  };

  return (
    <div className="container py-5" id="booking">
      <p className="text-center" data-aos="fade-up">BOOK A TABLE</p>
      <h1 data-aos="fade-up" style={{ fontVariant: 'small-caps', fontFamily: "'Amatic SC', sans-serif" }}
        className="text-center mb-5 display-4">Book Your<span>Stay With Us</span></h1>
      <div className="row g-0">
        <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
          <img src="image/10018.jpg" alt="Food Image" className="img-fluid" />
        </div>

        <div className="col-md-8" data-aos="fade-up" data-aos-delay="200">
          <div className="bg-light p-4 h-100 d-flex align-items-center">
            <form onSubmit={handleSubmit}>
              <div className="row mb-3 g-4">
                <div className="col-md-4">
                  <input type="text" className="form-control" placeholder="Your Name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="col-md-4">
                  <input type="email" className="form-control" placeholder="Your Email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="col-md-4">
                  <input type="text" className="form-control" placeholder="Your Phone" name="phone" value={formData.phone} onChange={handleChange} required />
                </div>
              </div>

              <div className="row mb-3 g-4">
                <div className="col-md-4">
                  <input type="date" className="form-control" name="date" value={formData.date} onChange={handleChange} required />
                </div>
                <div className="col-md-4">
                  <input type="time" className="form-control" name="time" value={formData.time} onChange={handleChange} required />
                </div>
                <div className="col-md-4">
                  <input type="number" className="form-control" placeholder="# of people" name="people" value={formData.people} onChange={handleChange} required />
                </div>
              </div>

              <div className="mb-3">
                <textarea className="form-control" placeholder="Message" rows="4" name="message" value={formData.message} onChange={handleChange}></textarea>
              </div>

              {formStatus && (
                <div className={`alert ${formStatus.type === 'success' ? 'alert-success' : 'alert-danger'} mb-3`} role="alert">
                  {formStatus.message}
                </div>
              )}

              <div className="d-grid">
                <button type="submit" className="btn btn-danger w-50 mx-auto">Book a Table</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}