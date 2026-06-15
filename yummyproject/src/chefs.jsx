import React from 'react'

const chefs = [
  {
    name: "Walter White",
    image: "image/10011.jpg",
    role: "Master Chef",
    description: "Velit aut quia fugit et et. Dolorum ea voluptate vel tempore tenetur ipsa quae aut. Ipsum exercitationem iure minima enim corporis et voluptate.",
    social: {
      twitter: "#",
      facebook: "#",
      instagram: "#",
      linkedin: "#"
    }
  },
  {
    name: "Sarah Johnson",
    image: "image/10012.jpg",
    role: "Patissier",
    description: "Quo esse repellendus quia id. Est eum et accusantium pariatur fugit nihil minima suscipit corporis. Voluptate sed quas reiciendis animi neque sapiente.",
    social: {
      twitter: "#",
      facebook: "#",
      instagram: "#",
      linkedin: "#"
    }
  },
  {
    name: "William Anderson",
    image: "image/10013.jpg",
    role: "Cook",
    description: "Vero omnis enim consequatur. Voluptas consectetur unde qui molestiae deserunt. Voluptates enim aut architecto porro aspernatur molestiae modi.",
    social: {
      twitter: "#",
      facebook: "#",
      instagram: "#",
      linkedin: "#"
    }
  }
];

export default function Chefs() {
  return (
    <div className="container my-5" id="chef">
      <p className="text-center" data-aos="fade-up">CHEFS</p>
      <h1 data-aos="fade-up" style={{ fontFamily: 'Amatic SC, sans-serif' }} className="text-center mb-5 display-4">Our
        <span>Professional</span> Chefs
      </h1>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {chefs.map((chef, index) => (
          <div className="col" key={index}>
            <div className="card h-100 shadow chef-card" data-aos="fade-up" data-aos-delay={100 * (index + 1)}>
              <div className="position-relative">
                <img src={chef.image} alt={chef.name} className="card-img-top chef-image" />
                <div className="social-icons d-flex flex-column">
                  <a href={chef.social.twitter} className="text-dark mb-2"><i className="bi bi-twitter-x"></i></a>
                  <a href={chef.social.facebook} className="text-dark mb-2"><i className="bi bi-facebook"></i></a>
                  <a href={chef.social.instagram} className="text-dark mb-2"><i className="bi bi-instagram"></i></a>
                  <a href={chef.social.linkedin} className="text-dark"><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div className="card-body">
                <h5 className="card-title">{chef.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{chef.role}</h6>
                <p className="card-text">{chef.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}