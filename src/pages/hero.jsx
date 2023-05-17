import React from "react";

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

<h1>Discover your dream PG today</h1>

<button>Join Now</button>

</div>

<div className="hero-right"> <img src={heroimg} alt=""></img>

</div>

</div>

</div>

);

}