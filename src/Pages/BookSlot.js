import React from 'react'
import Base from '../Components/Base'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../Pages/background.css';

export default function BookSlot() {

   
    const navigate = useNavigate();

    const [data, setData] = useState({
        vehicleName:"",
        vehicleNumber:"",
        vehicleType:"",
        parkingTime:"",
    


    })
   
    const [VehicleType,setVehicleType] = useState({})

    const HandleSelectChange = (e)=>{
        setVehicleType((e.target.value))
    }

    console.log(VehicleType);
    const changeHandler = (e) => {
        setData((data) => ({
            ...data,
            [e.target.name]: e.target.value,
        }));
    }

    const submitData = (e) =>{
        e.preventDefault();

        fetch("http://localhost:9009/saveBookingSlot",
              {method : 'POST',
                body:JSON.stringify({
                    vehicleName:data.vehicleName,
                    vehicleNumber:data.vehicleNumber,
                    vehicleType:VehicleType,
                    parkingTime:data.parkingTime,
                    
                }),
                headers:{
                    'Content-Type':'application/json'
                }
                })
                .then(resp => resp.json())
                .then(dat => {
                    setData(dat)
                    alert("Booking is Conformed Please Vist to Your Selected Location");
                    navigate('/ViewLocation');
                })
                .catch(
                    (err) => {
                      console.log(err)  
                    }
                )
        }

        
    return (

        <div>
            <Base>
                <div>
                    <div className="container mt-5 col-8">

                        <h1><strong>Book Slot</strong></h1>
                        <form method="POST">

                            <div className="mb-3">
                                <label>Vehicle Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Vehicle Name"
                                    name='vehicleName'
                                    value={data.vehicleName}
                                    onChange={changeHandler}
                                />
                            </div>
                            <div className="mb-3">
                                <label>Vehicle Number</label>
                                <input type="text"
                                    className="form-control"
                                    placeholder="Vehicle Number"
                                    name='vehicleNumber'
                                    onChange={changeHandler}
                                    value={data.vehicleNumber}
                                />
                            </div>
                           

                            <label><b> Vehicle Type </b></label>
                            <select className="form-select" onChange={HandleSelectChange}>
                                <option value="Two-Wheeler">Two-Wheeler</option>
                                <option value="Four-Wheeler">Four-Wheeler</option>
                            </select>

                            <div className="mb-3 mt-3">
                                <label>Parking Time</label>
                                <input
                                    type="time"
                                    className="form-control"
                                    name='parkingTime'
                                    value={data.parkingTime}
                                    onChange={changeHandler}
                                />
                            </div>




                            <div className="d-grid col-2">
                                <button type="submit" className="btn btn-primary" onClick={submitData}>
                                    Book Now
                                </button>
                            </div>
                            {/* <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p> */}
                        </form>
                    </div>
                </div>

            </Base>
        </div>
    )
    }
