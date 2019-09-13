import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";
import CharacterCards from "./components/characterCard";
import styled from "styled-components";

const CardWrap = styled.div`
  border: 2px solid black;
  display: flex;
  flex-wrap: wrap;
`;

const App = () => {

  const [starWarsPeople, setStarWarsPeople] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(res => {
        setStarWarsPeople(res.data.results);
      })
      .catch(error => console.log(error));
  }, []);

  return (

    <div className="App">

      <h1 className="Header">React Wars</h1>

      <CardWrap>
        {starWarsPeople.map((people, index) => {
          return <CharacterCards key={index} people={people} />;
        })}
      </CardWrap>
      
    </div>
  );
}

export default App;
