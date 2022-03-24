import React from 'react';
import './Contact.css';
import Navbar from './Navbar';
const Action = () => {
  return <div>
   <Navbar/>
     <div className="Contactcontainer">
                <section className="Contacttop">
                    <h1>Contact Us</h1>
                    <img src={"./Images/contact.jpg"} alt="contact"/>
                </section>

            <section className="Contactmiddle">
                <div className="Contactleft">
                <h3>TetraLMS Headquaters</h3>
                <i className="fas fa-map-marker-alt fa-2x contactIcons"></i>    <p>Main Office:- Flat No. 002, Building P5, Ushay Towers, Sector 61, Kundli Sonipat, Haryana 131023</p>
                <h3>Client Inquiries</h3>
                <i className="fas fa-phone-square-alt fa-2x contactIcons"></i>    <p>+91-7011219709, +91-7042140046</p>
           <i className="fas fa-envelope fa-2x contactIcons" ></i>   <p>tms@tetrahedron.in</p>
           <p>     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3492.8087632716615!2d77.11748021489191!3d28.90403037849226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d06b651fd9ba1%3A0x619e5f2f4ab76585!2sTetrahedron%20Manufacturing%20Services!5e0!3m2!1sen!2sin!4v1642499090901!5m2!1sen!2sin" style={{border: '2px solid black',borderRadius:'15px'}} allowFullScreen loading="lazy" width={600} height={300} /></p>
                </div>
                <div className="Contactright">
                    <form className='contactform'>
                        <label className='contactLabel'>Name</label>
                        <input type="text" placeholder="Please write your full name*" className='contactInput' required/>
                        <label className='contactLabel'>Company Name</label>
                        <input type="text" placeholder="Company Name" className='contactInput' />
                        <label className='contactLabel'>Email</label>
                        <input type="Email" placeholder="Email is Required" className='contactInput' required/>
                        <label className='contactLabel'>Location</label>
                        <input type="text" placeholder="Mention your Location*" className='contactInput'  required/>
                        <label className='contactLabel'>Mobile No.</label>
                        <input type="mobile" placeholder="Mobile No.*" className='contactInput'  required/>
                        <label className='contactLabel'>Message</label>
                        <textarea placeholder="Your Message" className='contactInput' ></textarea>
                        <button className='contactBtn'>Send</button>
                    </form>
                </div>
            </section>

            </div>
            <footer className="bg-dark p-5 my-0">
        <div className="row ">
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 text-white">
            <ul  className="list1">
              <li  className="mb-2"><u><strong>Quick Links</strong></u></li>
               
              
              <li>Home</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Gallery</li>
              <li>Resources</li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 text-white">
            <ul className="list2">
              <li className="mb-2"><u><strong>Expertise</strong></u></li>
              <li>Manufacturing Management Consulting</li>
              <li>Corporate training</li>
              <li>Campus to Corporate Accelerator</li>
              <li>Automation</li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 text-white">
            <ul className="list3" >
              
            <li className="mb-3"><u><strong>Social Network</strong></u></li>
            <li><div className="row">
              <div className="col"><i className="fab fa-facebook fa-2x whiteincolor"></i>
            </div>
            <div className="col"><i className="fab fa-instagram fa-2x"></i></div>
            <div className="col"><i className="fab fa-linkedin fa-2x"></i></div>
            {/* <div className="col"><i className="fab fa-twitter fa-2x"></i></div> */}
            </div>
           
            </li></ul>
            
          </div>
          
        </div>
        
      </footer>
  </div>;
};

export default Action;
