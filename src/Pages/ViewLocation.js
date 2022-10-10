import { Button } from 'bootstrap';
import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Base from '../Components/Base'
import '../Pages/background.css';

export default function ViewLocation() {

    const[user, setUser] = useState({
        firstName:"",
        lastName:"",
    })


    const navigate = useNavigate();

   

    const [location, setlocation] = useState([]);

    const getData = () => {
        fetch("http://localhost:9009/getAllLocation")
            .then(res => res.json())
            .then(res => setlocation(res),
                // LocalStorage.setItem("locationID", res.locationId)
            );
        // console.log(res);
    }



    useEffect(() => {
        let us = JSON.parse(sessionStorage.getItem("user"));
        console.log(us);
        setUser({ firstName: us.firstName, lastName: us.lastName })

        getData();
    }, []);


    const logout = () => {
        
        sessionStorage.clear();

        navigate("/Login");
    }

    const bookingDetails = () => {
        // sessionStorage.clear();
        navigate("/BookingDetails");
    }


    return (

        <div className='disp'>
            <Base />

            <div className="col-sm-6"><h2 className=" container mt-5 mx-5" style={{ color:"rgba(37, 167, 0, 0.8)"}}> <strong>Hello, {user.firstName} {user.lastName}</strong></h2></div>
            <button className='btn btn-primary' style={{ float: "right", marginTop: "10px", marginRight: "10px" }} onClick={logout}>LogOut</button>
            <button className='btn btn-primary' style={{ float: "right", marginTop: "10px", marginRight: "10px" }} onClick={bookingDetails}>Check My Bookings</button>

            <div className=" container align-items-cente mt-5 row ">


                {
                    location.map(
                        (data, index) => {
                            return (
                                
                                <div className=" card ml-5 mx-5 mt-5" style={{ width: "18rem" }} key = {index}>
                                    {/* <img src="..." className="card-img-top" alt="..." /> */}
                                    <div className="card-body">

                                        <h5 className="card-title">{data.parkingArea}</h5>
                                        <p className="card-text">{data.locationName}</p>
                                        <p className="card-text"><strong>Address:</strong> {data.address}</p>

                                    </div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Total Sots: {data.totalSlots}</li>
                                        <li className="list-group-item">Available Sots: {data.availableSlots}</li>
                                        <li className="list-group-item">Booked Sots: {data.bookedSlots}</li>
                                        <li className="list-group-item">Price : {data.bookingPrice} .Rs</li>
                                        

                                    </ul>
                                    <div className="card-body">
                                        <button className='btn btn-secondary' style={{ float: "right", marginTop: "10px", marginRight: "10px" }} onClick={() => navigate("/BookSlot")}>Slot Booking</button>
                                        
                                    </div>
                                </div>
            
                            )
                        }
                    )

                }


            </div>
        </div>
    )
}
