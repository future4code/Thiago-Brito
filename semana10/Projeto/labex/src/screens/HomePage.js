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
  return (
    <div>
      <p>
        Home

      </p>
    </div>
  );
}
