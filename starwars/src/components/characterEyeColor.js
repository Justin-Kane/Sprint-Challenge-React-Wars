import React from "react";
import styled from "styled-components";

const EyeColor = styled.h3`
  color: red;
`;

export default function CharacterEyeColor(props) {
  return <EyeColor>EyeColor: {props.eyecolor}</EyeColor>;
}