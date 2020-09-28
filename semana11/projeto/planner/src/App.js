import React from 'react';
import './App.css';
import Planner from "./planner/Planner"
import {useAxiosConfigs} from "./axiosconfig/AxiosConfig"

export default function App() {
const {getTasks, tasks} = useAxiosConfigs()

  return (
    <div>
      <Planner getTasks={getTasks} tasks={tasks}/>
    </div>
  );
}


