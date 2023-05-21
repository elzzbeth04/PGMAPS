import React, { useContext, useState, useEffect} from 'react';
import './Dashboard.css';
import LOGOWIDE from '../../images/LOGOWIDE.png';
import lakslogo from '../../images/lakslogo.png';
import NJLOGO from '../../images/NJLOGO.png';
import vhlogo from '../../images/vhlogo.png';
import {app,database,storage,} from "../../firebase";
import { collection,addDoc,getDocs } from 'firebase/firestore';

import { AuthContext } from '../../context';
import {uploadBytes,getDownloadURL} from "firebase/storage";
import { ref } from "firebase/storage";


export default function Dashboard() {
  const[data,setData]=useState([]);


  const fetchPost =async() =>{
    const db = database;
    await getDocs(collection(db,"pg"))
    .then((querySnapshot)=>{

      const newData=querySnapshot.docs.map((doc) => ({...doc.data(),id: doc.id,}));
      console.log(newData, "newData");
      setData(newData);
    });
  };

  useEffect(() => {
    fetchPost();



      console.log(data);
    },[])
  
  const { user } = useContext(AuthContext);
 
  
  
  const initialvalue = {
    pg_name: "",
    owner_name:"",
    address: "",
    facilities: "",
    rent: "",
    phone: "",
    photo_url:""
  };
    const [pg,setPg]= useState(initialvalue);
    const [urlkey, seturlkey] = useState("");

    const handleChange = (e) =>{
   const{name,value} = e.target;
   setPg({ ...pg,[name]:value});
   console.log(pg);


    };
    const [file, setFile] = useState(null);

    const handleFileInputChange = (event) => {
      setFile(event.target.files[0]);
      console.log(event.target.files[0]);
      
    };
    const handleform = () => {
      const PGImageRef = ref(storage, `images/${file.name}`);
      console.log("uploading:");
    
      console.log(file);
      uploadBytes(PGImageRef, file).then((snapshot) => {

        getDownloadURL(PGImageRef)
        .then((url) => {  
          seturlkey(url);
          setPg({ ...pg, photo: url });
          console.log(url);
          
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };


  const handleAddDoc = () => {
    const dbInstance = collection(database, "pg");
  
            addDoc(dbInstance, {
              ...pg,
            });

  };


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
          <div className="center">
            {/* Card 1 */}
            {/* Card 2 */}
            {data.map((pg, index) => (
      <div className="card" key={index}>
        <img className="pgpic" src={pg.photo_url} alt="" />
        <div className="card-content">
          <p>Name: {pg.pg_name}</p>
          <p>PHONE NO: {pg.phone}</p>
          <p>ADDRESS: {pg.address}</p>
          {/* Add other properties here */}
        </div>
      </div>
    ))}
           
          </div>

          <div className="right-bar">
            <div className="form"> 
             <h2 className="new">ADD YOUR PG</h2><br />
            
              <label> PG NAME:</label>
              <input id="pgname"type="text" placeholder="Enter the pg name" name="pg_name" value={pg.pg_name} onChange={handleChange} />
              <br />
              <label> Image:</label> <br />
                  <input type="file" 
                
                
                onChange={(event) => handleFileInputChange(event)}

                  accept="image/*" />
                  <br />
                  
                  <button className="btn-3"  onClick={handleform} type="button">Upload</button>
                  <br />
              <label>Address:</label> <br />
                  <input
                  placeholder="enter address"
                    id="address"
                    name="address"
                    value={pg.address}
                    onChange={handleChange}
                  />
                  <br />


              <label>Facilities:</label><br />
              <input type="text"
              id="facilities"name="facilities" value={pg.facilities}
              onChange={handleChange} />
              <br />

              <label>Rent:</label> <br />
                  <input
                    type="number"
                    id="rent"
                    name="rent"
                    value={pg.rent}
                    onChange={handleChange}
                  />
                  <br />
                  <label>Phone Number:</label> <br />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={pg.phone}
                    onChange={handleChange}
                  />
                  <br />
                  <br />
              <button className="btn-4" onClick={handleAddDoc} type="submit">SUBMIT</button>
            
            
            </div>
          
          </div>
        </div>
      </div>
    );
  }
}








