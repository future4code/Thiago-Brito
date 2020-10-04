import React from "react";
import {useHistory} from 'react-router-dom'

export default function HomePage() {
  const history = useHistory()
  const goToLogin = () => {
    history.push("/login")
  }
  const goToApplicationForm = () => {
    history.push("/application-form")
  }
  const logout = () => {
    const token = window.localStorage.removeItem("token")
  }
  return (
    <div>
      <p>
        Home
      </p>
      <button onClick={logout}>logout</button>
    </div>
  );
}


// 