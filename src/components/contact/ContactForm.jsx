
const ContactForm = () => {
  return (
    <div className="contact-form">
              <h2>Make an Enquiry</h2>

              <form>
                         <div className="form-row split">
                                     <div className="form-row-column">
                                                <label htmlFor="firstname">First name</label>
                                                <input type="text" placeholder="First name" className="form-control"/>
                                     </div>
                                     <div className="form-row-column">
                                                <label htmlFor="lastname">Last name</label>
                                                <input type="text" placeholder="Last name" className="form-control"/>
                                     </div>
                         </div>
                         <div className="form-row split">
                                     <div className="form-row-column">
                                                <label htmlFor="firstname">Email address</label>
                                                <input type="email" placeholder="Email address" className="form-control"/>
                                     </div>
                                     <div className="form-row-column">
                                                <label htmlFor="phone">Phone number</label>
                                                <input type="text" placeholder="Phone number" className="form-control"/>
                                     </div>
                         </div>
                         <div className="form-row">
                                   <label htmlFor="subject">Subject</label>
                                   <input type="text" placeholder="Subject" className="form-control"/>
                         </div>
                         <div className="form-row">
                                     <label htmlFor="message">Message</label>
                                     <textarea placeholder="Write your message"></textarea>
                         </div>
                         <div className="form-btn">
                                      <button type="submit">Submit Enquiry</button>
                         </div>
              </form>
    </div>
  )
}

export default ContactForm