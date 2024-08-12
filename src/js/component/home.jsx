import React from "react";
import SecondsCounter  from "./secondscounter "; 

import Countdown from "./countdown"
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
	  <div className="container">
		<SecondsCounter seconds={0} />
		<Countdown initialTime={0} />
	  </div>
	);
  };


export default Home;
