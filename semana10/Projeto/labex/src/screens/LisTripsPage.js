import axios from "axios";
import React, {useState, useEffect} from "react";
import {useHistory} from 'react-router-dom'

const baseUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/labeX/Thiago-Jackson/trips";

export default function ListTripsPage() {
    const [trips, setTrips] = useState([])
    const history = useHistory()
    const goToTripsDetails = (history, id) =>{
      history.push(`/trips/details/${id}`)
    }

    const goToHome = () =>{
      history.push("/")
    }
    
    const getDetails = () => {
      axios
      .get(`${baseUrl}`, {
        headers: {
          auth: localStorage.getItem("token")
        }
      })
      .then((response) => {
        console.log(response.data.trips);
        setTrips(response.data.trips)
      })
      .catch((err) => {
        console.log(err.message);
      });
      
    }
    useEffect(() => {
      getDetails();

    }, []);

  return (
    <div>
      <h1>
          Viagens
      </h1>
      <p>
        {trips.map((t)=>{
          return(
            <div>
              <p key={t.id}><h2>{t.name}</h2>
              <p><strong>Planeta </strong>{t.planet}</p>
              <p><strong>Duração </strong>{t.durationInDays}</p>
              <p><strong>Data: </strong>{t.date}</p>
              <p><strong>Descrição: </strong>{t.description}</p>
              </p>
              <button onClick={()=>goToTripsDetails(history,t.id)}>detalhes</button>
            </div>
          
          )
        })}
      </p>
      <button onClick={goToHome}></button>
     
    </div>
  );
}
