import React from 'react';
import home from './img/Home.png';

const Home = () => {
  return (
    <div className="home" id="home">
      <div className="container">
			  <div className="row">
				<div className="col">
					<p>We Create Content that ranks</p>
					<button type="button" className="button btn-primary btn-outline-light">SEE OUR WORK</button>
				</div>
				<div className="col float-right">
					<img src={home} alt=""/>
				</div>
			</div>
		</div>
    </div>
  );
};

export default Home;
