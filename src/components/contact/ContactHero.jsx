import ContactForm from "./ContactForm"

const ContactHero = () => {
  return (
    <div className="contact-hero">
              <div className="inner-row">
                        <div className="contact-hero-content">
                                  <div className="contact-intro">
                                          <h1>Get in Touch with Us</h1>
                                          <p>Whether you're exploring a new school for your child or need support from any of our departments, we're here to help. Feel free to reach out with your questions, and a member of our team will be happy to assist you.</p>
                                  </div>

                                  <div className="contact-details">
                                            <h3>Contact Details</h3>

                                            <div className="contact-details-row">
                                                       <div className="details-group">
                                                                 <div className="block">
                                                                        <h4>Telephone</h4>
                                                                          <p><span>Reception:</span>+254 7124 7850</p>
                                                                          <p><span>Admissions:</span>+254 7224 6840</p>
                                                                          <p><span>Finance:</span>+254 7384 7860</p>
                                                                 </div>

                                                                 <div className="block">
                                                                          <h4>Emails</h4>
                                                                          <p><span>Reception:</span>reception@moieducentre.ac.ke</p>
                                                                          <p><span>Admissions:</span>admissions@moieducentre.ac.ke</p>
                                                                          <p><span>Finance:</span>finance@moieducentre.ac.ke</p>
                                                                 </div>

                                                                 <h4>Location</h4>
                                                                 <p>Main Mahiu Rd, City Estate, Nairobi West</p>
                                                       </div>
                                                       <div className="map-group">
                                                                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3791.4078479914624!2d36.819154!3d-1.314211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1056af73d3f9%3A0x3c605faf6420bcac!2sMoi%20Educational%20Centre!5e1!3m2!1sen!2ske!4v1748390022519!5m2!1sen!2ske" width="600" height="450"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                                       </div>
                                            </div>
                                  </div>


                                  <ContactForm />
                        </div>
              </div>
    </div>
  )
}

export default ContactHero