import React,{useState, useEffect} from "react";
import axios from "axios"
import {useHistory} from 'react-router-dom'

const baseUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/labeX/Thiago-Jackson";

export default function LoginPage() {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const history = useHistory()
  const goToHome = () =>{
    history.push("/")
  }
  useEffect(() => {
    const token = window.localStorage.getItem("token");

    if (token) {
      history.push("/trips/create");
    }
  }, [history]);

  const handleEmailChange = (event) => {
    setEmailValue(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPasswordValue(event.target.value);
  };

  const handleLogin = () => {
    const body = {
      email: emailValue,
      password: passwordValue
    };

    axios
      .post(`${baseUrl}/login`, body)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        history.push("/trips/create");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <p>
          login
      </p>
      <input value={emailValue} onChange={handleEmailChange} />
      <input value={passwordValue} onChange={handlePasswordChange} />
      <button onClick={handleLogin}>Fazer Login</button>
      <button onClick={goToHome}>Voltar</button>
    </div>
  );
}
