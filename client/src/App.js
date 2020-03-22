import React from 'react';
import "./App.css";
//import Container Component from semantic-ui-react 
import { Container } from "semantic-ui-react"; 
import ToDoList from "./To-Do-List";

const App = props => {
  return (
    <div>
      <Container>
        <ToDoList /> 
      </Container>
    </div>
  )
}

export default App;
