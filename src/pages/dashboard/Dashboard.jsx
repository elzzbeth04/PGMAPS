import React from 'react'
import LOGOWIDE from "../../images/LOGOWIDE.png"
import "./Dashboard.css"
export default function Dashboard() {
    return(
    <div className="Dashboard">
        <div className="navbar">
            <div className="nav-left">
             <img src={LOGOWIDE} alt=""></img>

            </div>
            <div className="nav-centre">
            <h1>Dashboard</h1>
            </div>
            <div className="nav-right">
               
                JOE BIDEN
                <img className="image"src="https://thumbs.dreamstime.com/z/man-showing-small-amount-fingers-casual-gesture-48840368.jpg"></img>
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