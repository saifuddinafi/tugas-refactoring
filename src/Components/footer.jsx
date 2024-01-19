import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="footer">
        <div className="col">
          <div className="footer-heading">
            <h3>Questions, Comments, Concerns?</h3>
            <p>We’d love to <font color="#E73587">hear</font> from you!</p>
          </div>
        </div>
        <div className="col">
          <div className="footer-email-form">
            <form>
              <div className="form-group">
                <label for="exampleFormControlInput1">Your Email Address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="something@website.com"/>
              </div>
              <div className="form-group">
                <label for="exampleFormControlInput1">Subject</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Question about your article"/>
              </div>		
              <div className="form-group">
                <label for="exampleFormControlTextarea1">Message</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="4" placeholder="Your message starts with…"></textarea>
              </div>
              <input type="submit" value="Send a Message" id="footer-email-btn"/>
            </form>
          </div>
        </div>
        <div className="copyright text-left">
          2020 © All rights reserved by Your company name
        </div>
      </div>
    </footer>
  );
};

export default Footer;