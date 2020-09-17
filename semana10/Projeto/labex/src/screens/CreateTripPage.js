import React,{useState, useEffect} from "react";
import {useHistory} from 'react-router-dom'
import axios from "axios";

const baseUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/labeX/Thiago-Jackson";

export default function CreateTripPage() {
  const history = useHistory()
  const goToHome = () =>{
    history.push("/")
  }
  const goToTrip = () =>{
    history.push("/trips/details")
  }

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      createTrip();
    } else {
      history.push("/login");
    }
  }, [history]);

  const createTrip = () => {
    axios
      .post(`${baseUrl}/trip/`, {
        headers: {
          auth: localStorage.getItem("token")
        }
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>

      <p>
          Criar viagem
      </p>
      <button onClick={goToHome}>Home</button>
      <button onClick={goToTrip}>Detalhes da viagem</button>
    </div>
  );
}

