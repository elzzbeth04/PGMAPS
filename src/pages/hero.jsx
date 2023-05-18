import React from "react";
import "./hero.css"
import heroimg from '../images/pgmaps.webp';

export default function Hero() {

return (

<div className="hero">

<div className="nav"> <div className="nav-left">

<h1>PGfind</h1>

</div>

<div className="nav-right">

<a href="/login">Login</a>

</div>

</div>

<div className="hero-cont">

<div className="hero-left">

<h3>Discover your dream PG today</h3>

<button>Join Now</button>

</div>

<div className="hero-right"> <img src="https://www.thespruce.com/thmb/DsduA_Cjy2ueOM4CHcGSv3aVaQs=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/pink-and-purple-paint-colors-for-the-bedroom-350784-hero-c94e52789f1d493095b1362be19d9ac4.jpg" alt=""></img>

</div>

</div>

</div>

);

}