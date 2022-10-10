import React from 'react'
import Base from '../Components/Base'
import { useState, useEffect } from "react";

export default function BookingDetails() {


    const [bookingDetail, setbookingDetail] = useState([]);

    const getData = () => {
        let us = JSON.parse(sessionStorage.getItem("user"));
        let uId = us.userId;
        fetch("http://localhost:9009/allbookingSlot")
            .then(res => res.json())
            .then(res => setbookingDetail(res),
                // LocalStorage.setItem("locationID", res.locationId)
            );
    }

   


    useEffect(() => {
        // let us = JSON.parse(sessionStorage.getItem("user"));
        // console.log(us);
        // setUser({ firstName: us.firstName, lastName: us.lastName })

        getData(
        );
    }, []);


    const arr = [];
    arr.push(bookingDetail);

    


  return (

    

    <div>
        {console.log(bookingDetail, arr) 
    
        }

      <Base />
      <div>
         <h2 className='text-center'>Booking Details</h2>
         
         <div className="roe">
         <table className='table table-striped table-bordered'>

              <thead>
                                <tr>
                                    <th> Vehicle Name</th>
                                    <th> Vehicle Number</th>
                                    <th> Vehicle Type</th>
                                    <th> Parking Time</th>
                                    <th>Parking Location</th>
                                    <th>Address</th>
                                    <th> Action </th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    arr.map( (item,) =>{
                                   {console.log(item)} 
                                    
                                        <tr>
                                        <td>{item.vehicleName}</td>
                                        <td>{item.vehicleNumber}</td>
                                        <td>{item.vehicleType}</td>
                                        <td>{item.parkingTime}</td>
                                        <td></td>
                                        <td></td>
                                        <td >
                                            
                                            <button  className="btn btn-danger">Cancle Booking</button>
                                            

                                        </td>
                                    </tr>
                                
                                        

                                    } )
                               
                                   
                                
                            }
                            </tbody>

         </table>
         </div>
         
      </div>
    </div>
  )
}
