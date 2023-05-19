import React, { useContext } from 'react';
import { AuthContext } from '../../context';
import './Dashboard.css';
import LOGOWIDE from '../../images/LOGOWIDE.png';
import lakslogo from '../../images/lakslogo.png';
import NJLOGO from '../../images/NJLOGO.png';
import vhlogo from '../../images/vhlogo.png';

export default function Dashboard() {
  const { user } = useContext(AuthContext);

  if (user) {
    return (
      <div className="Dashboard">
        <div className="navbar">
          <div className="navbar-left">
            <img className="logo" src={LOGOWIDE} alt="" />
          </div>
          <div className="navbar-centre">
            <h1 className="dash">Dashboard</h1>
          </div>
          <div className="navbar-right">
            <p className="name">{user.displayName}</p>
            <img className="pic" src={user.photoURL} alt="" />
          </div>
        </div>

        <div className="bar">
          <div className="left-bar">
            <button className="btn">HOME</button>
            <button className="btn2">DASHBOARD</button>
          </div>
          <div className="centre">
            {/* Card 1 */}
            <div className="card">
              <img className="pgpic" src={lakslogo} alt="" />
              <div className="card-content">
                <p>Name: LAKSHMI PGS FOR WOMEN</p>
                <p>PHONE NO: 487981798789</p>
                <p>ADDRESS: TC 23/1113, MARADU, KOCHI</p>
                <p>RATING: ⭐ ⭐ ⭐ ⭐</p>
                <p>
                  <strong>RATE: ₹4500/month</strong>
                </p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="card">
              <img className="pgpic" src={NJLOGO} alt="" />
              <div className="card-content">
                <p>Name: NAVAJYOTI HOSTEL</p>
                <p>PHONE NO: 4879817858789</p>
                <p>ADDRESS: TC 23/1413, THRIKKAKARA, KOCHI</p>
                <p>RATING: ⭐ ⭐ ⭐ ⭐</p>
                <p>
                  <strong>RATE: ₹5500/month</strong>
                </p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="card">
              <img className="pgpic" src={vhlogo} alt="" />
              <div className="card-content">
                <p>Name: VIMALA HOSTEL</p>
                <p>PHONE NO: 48728981798789</p>
                <p>ADDRESS: TC 23/1113, THRIKKAKARA, EDAPALLY PO, KOCHI</p>
                <p>RATING: ⭐ ⭐ ⭐ ⭐</p>
                <p>
                  <strong>RATE: ₹4500/month</strong>
                </p>
              </div>
            </div>
          </div>

          <div className="right-bar">
            <div className="form"> 
             <h2 className="new">ADD NEW PG</h2><br />
            <form method="post">
              <label  >NAME:</label>
              <input id="pgname"type="text" placeholder="Enter the pg name" name="pgname"  />
              <br />
              <label >ADDRESS:</label>
              
              <input id="add"  name ="address"  type="text"placeholder="Enter your address" ></input>
              <br />
              <label >Phone No. :</label> 
              <input id="phno"type="number" placeholder="Enter contact number" name="pno."  />
              <br />
            </form>
            
            </div>
          
          </div>
        </div>
      </div>
    );
  }
}







