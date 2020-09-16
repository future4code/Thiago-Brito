import React from "react";
import {useHistory} from 'react-router-dom'



export default function ListTripsPage() {
    const history = useHistory()
    const goToTripsDetails = () =>{
      history.push("/trips/details")
    }

    const goToHome = () =>{
      history.push("/")
    }
  return (
    <div>
      <p>
          Viagens
      </p>
    </div>
  );
}
