import React from 'react';
import './App.css';
import Axios from "axios"
import Planner from "./planner/Planner"
import {useAxiosConfigs} from "./axiosconfig/AxiosConfig"

function App() {
const {getTasks, tasks} = useAxiosConfigs()


  return (
    <div>
      <Planner getTasks={getTasks} tasks={tasks}/>
    </div>
  );
}

export default App;
