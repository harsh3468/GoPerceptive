import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom'
import TaskHeader from '../src/Component/TaskHeader'
import TaskDash from '../src/Component/TaskDash'
import './App.css';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <TaskHeader/>
    <Route path='/' component={TaskDash} exact={true}></Route>
    </BrowserRouter>
    </div>
  );
}

export default App;
