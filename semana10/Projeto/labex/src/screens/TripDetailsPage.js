import React,{useEffect} from "react";
import {useHistory} from 'react-router-dom'
import axios from "axios";


const baseUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/labeX/Thiago-Jackson";

export default function TripDetailsPage() {
  const history = useHistory()
  const goToHome = () =>{
    history.push("/")
  }
  useEffect(() => {
    const token = window.localStorage.getItem("token");

    if (token) {
      getTripDetail();
    } else {
      history.push("/login");
    }
  }, [history]);

  const getTripDetail = () => {
    axios
      .get(`${baseUrl}/trip/`, {
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
          Detalhes
      </p>
      <button onClick={goToHome}>Voltar</button>
    </div>
  );
}
