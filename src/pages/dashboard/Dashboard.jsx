import React from 'react'
import images from  "../../images/logo.png"
export default function Dashboard() {
    return(
    <div className="Dashboard">
        <div className="navbar">
            <div className="nav-left">
             <img src={images} alt=""></img>

            </div>
            <div className="nav-centre">
            <h1>Dashboard</h1>
            </div>
            <div className="nav-right">
                <div className="name"> 
                
                </div>
                <div className= "photo">

                </div>
            </div>
        </div>

       <div className="card">

          <div className="left">


          </div>

          <div className="right">


          </div>


          <div className="centre">


           </div>






       </div>










        
        
    </div>
           
    ) 
}