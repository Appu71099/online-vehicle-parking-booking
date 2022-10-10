import React from 'react'
import { useNavigate } from 'react-router-dom'
import Base from '../Components/Base'
import NavBar from '../Components/NavBar'

export default function Home() {

  return (
    <div>
        <Base />
        <div className="container">
        <h2 className="py-3">About Us</h2>

        <p>
         <strong> BOOK PARKING (Online Vehicle Parking System)</strong> - The proposed project is a smart Online 
          Parking System that provides customers an easy way of reserving a parking space online. 
          It overcomes the problem of finding a parking space in commercial areas that consumes time
          unnecessarily. 

        </p>
        <p>
         User have to Register him self and after the regestration he/she has to login.
         After Login he/she has to choose there location and book slot by filling required information about them.
        </p>
        <p className="container text-muted">
          Group Members:
          <ul>
            <li>Raj Kashyap</li>
            <li>Anandhu U K</li>
            <li>Ashwini Prasad</li>
            <li>Swathy Mohan</li>
            <li>Shantanu Barbole</li>
            <li>Prashik Ramteke</li>
          </ul>
        </p>
      </div>
        
      
    </div>
  )
}
