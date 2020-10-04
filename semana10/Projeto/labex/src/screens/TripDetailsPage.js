import React,{useEffect, useState} from "react";
import {useHistory, useParams} from 'react-router-dom'
import axios from "axios";


const baseUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/labeX/Thiago-Jackson/trips";

export default function TripDetailsPage() {
  const [details, setDetails] = useState([])
  const history = useHistory()
  const goToHome = () =>{
    history.push("/")
  }

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    getTripDetail();
    if (!token) {
      history.push("/login");
  
    }
  }, [history]);
  const pathParams = useParams();
  const getTripDetail = () => {
    axios
      .get(`${baseUrl}/${pathParams.id}`, {
        headers: {
          auth: localStorage.getItem("token")
        }
      })
      .then((response) => {
        console.log(response);
        setDetails(response.trips)
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const token = window.localStorage.getItem("token");

  return (
    <div>
      {details.name}
      {details.description}
      {details.planet}
      {details.durationInDays}
      {details.date}
      <p>
          Detalhes
      </p>
      <button onClick={goToHome}>Voltar</button>
    </div>
  );
}
