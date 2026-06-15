import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons CSS

const Contact = () => {
    React.useEffect(() => {
        AOS.init(); // Initialize AOS for animations
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission
        alert('Form submitted successfully!');
    };

    return (
        <div className="container py-5 w-100" id="contact">
            <p className="text-center" data-aos="fade-up">CONTACT</p>
            <h1 data-aos="fade-up" style={{ fontVariant: 'small-caps', fontFamily: "'Amatic SC', sans-serif" }} className="text-center mb-5 display-4">
                Need Help?<span> Contact Us</span>
            </h1>
            <div className="row">
                <div className="col-md-12" data-aos="fade-up" data-aos-delay="100">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d24194.89157059023!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a222fcb050d%3A0x8300747c6c6fec23!2sBrooklyn%20Bridge-City%20Hall!5e0!3m2!1sen!2sus!4v1725892114075!5m2!1sen!2sus"
                        width="100%" height="450" style={{ border: 0 }} allowFullScreen loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
                    <div className="card shadow mb-3 contact">
                        <div className="card-body">
                            <i className="bi bi-geo-alt"></i> {/* Bootstrap Location Icon */}
                            <h5 className="card-title">Address</h5>
                            <p className="card-text">123 Main St, Brooklyn, NY 11201</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
                    <div className="card shadow mb-3 contact">
                        <div className="card-body">
                            <i className="bi bi-telephone"></i> {/* Bootstrap Phone Icon */}
                            <h5 className="card-title">Call Us</h5>
                            <p className="card-text">+1 5589 55488 55</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6" data-aos="fade-up" data-aos-delay="300">
                    <div className="card shadow mb-3 contact">
                        <div className="card-body">
                            <i className="bi bi-envelope"></i> {/* Bootstrap Envelope Icon */}
                            <h5 className="card-title">Email Us</h5>
                            <p className="card-text">info@example.com</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6" data-aos="fade-up" data-aos-delay="400">
                    <div className="card shadow mb-3 contact">
                        <div className="card-body">
                            <i className="bi bi-clock"></i> {/* Bootstrap Clock Icon */}
                            <h5 className="card-title">Opening Hours</h5>
                            <p className="card-text ">Mon - Fri: 9:00 AM - 5:00 PM</p>
                        </div>
                    </div>
                </div>
            </div>
            <form onSubmit={handleSubmit} className="mt-4">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea className="form-control" id="message" rows="3" placeholder="Your Message" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default Contact;