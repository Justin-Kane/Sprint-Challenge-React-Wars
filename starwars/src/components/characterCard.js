import React from "react";
import styled from "styled-components";
import CharacterHairColor from "./characterHairColor";
import CharacterHeight from "./characterHeight";
import CharacterEyeColor from "./characterEyeColor";
import CharacterGender from "./characterGender";
import CharacterBirthYear from "./characterBirthYear";


const StyledCards = styled.div`
  border: 4px solid black;
  width: 30rem;
  margin: 20px auto;
  background-color: rgb(160, 168, 89, .5);
`;

const StyledNames = styled.h3`
  color: black;
  border-bottom: 1px solid black;
`;

export default function CharacterCards(props) {
    return (
        
        <StyledCards>
            <StyledNames>Name: {props.people.name}</StyledNames>
            <CharacterGender gender={props.people.gender} />
            <CharacterBirthYear birthyear={props.people.birth_year} />
            <CharacterHairColor haircolor={props.people.hair_color} />
            <CharacterEyeColor eyecolor={props.people.eye_color} />
            <CharacterHeight height={props.people.height} />
        </StyledCards>
        
    );
  }