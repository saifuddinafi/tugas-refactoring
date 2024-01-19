import React from 'react';
import AppDevelopment from './img/AppDevelopment.png';
import WebDevelopment from './img/WebDevelopment.png';
import UIDesign from './img/UIDesign.png';
import Brand from './img/Brand.png';
import Brand2 from './img/Brand2.png';
import Brand3 from './img/Brand3.png';
import Brand4 from './img/Brand3.png';

const Services = () => {
  return (
    <div>
    <div className="our-valuable-service" id="ourValuable">
      <h2>Our Valuable Service</h2>
      <hr />
      <div className="our-valuable">
        <div className="our-valuable-list revealMember1">
          <div className="team_img">
            <img src={AppDevelopment} alt=""/>
          </div>
          <h3>App Development</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button type="button" className="button-app btn-primary btn-outline-light">READ MORE</button>
        </div>
        <div className="our-valuable-list revealMember2">
          <div className="team_img">
            <img src={WebDevelopment} alt=""/>
          </div>
          <h3>Web Development</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button type="button" className="button-app btn-primary btn-outline-light">READ MORE</button>
        </div>
        <div className="our-valuable-list revealMember3">
          <div className="team_img">
            <img src={UIDesign} alt=""/>
          </div>
          <h3>UI UX Design</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button type="button" className="button-app btn-primary btn-outline-light">READ MORE</button>
        </div>
        <span className="arrow float-end"></span>
      </div>	
    </div>
    <div className="our-work" id="portfolio">
      <div className="container">
        <h1 className="text-center">Our Work</h1>
        <hr />
          <div className="row justify-content-center brand-name">
            <div className="col">
              <div className="bg-android">
                <img src={Brand} alt=""/>
              </div>
            </div>
            <div className="col">
              <h2>Brand Name</h2>
              <h3>iOS | ANDROID | WEB DEVELOPMENT</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            
          </div>
          <div className="row justify-content-center brand-name2">
            <div className="col d-flex flex-column">
              <h2 className="text-right">Brand Name</h2>
              <h3>iOS | ANDROID | WEB DEVELOPMENT</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className="col">
              <div className="bg-android">
                <img src={Brand2} alt=""/>
              </div>
            </div>
          </div>
          <div className="row justify-content-center brand-name3">
            <div className="col">
              <div className="bg-android">
                <img src={Brand3} alt=""/>
              </div>
            </div>
            <div className="col">
              <h2>Brand Name</h2>
              <h3>iOS | ANDROID | WEB DEVELOPMENT</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
          <div className="row justify-content-center brand-name4">
            <div className="col">
              <h2>Brand Name</h2>
              <h3>iOS | ANDROID | WEB DEVELOPMENT</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className="col">	
              <div className="bg-android">
                <img src={Brand4} alt=""/>
              </div>
            </div>
          </div>
          <div className="col-md-12 text-center">
            <button type="button" className="button-ui btn-primary btn-outline-light justify-content-center">SEE ALL WORK</button>	
          </div>
      </div>
    </div>
    </div>
  );
};

export default Services;
