import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const Why = styled.div`
font-size:13px;
grid-area:content;
background-color:white;
border: 1px solid #a7d7f9;
border-top:none;
padding: 1.5%;
font-family:sans-serif;
color:black;
h1{
  border-bottom:solid 1px grey;
  font-family: 'Linux Libertine','Georgia','Times',serif;
  line-height: 1.3;
  margin-bottom: 0.25em;
  padding: 0;
  font-size: 2.5em;
  color:black;
  position:relative;
  font-weight: 300;
}

`;
const SecondPage = () => (
  <Why>
    <Link to="/">Get back to Ryan!</Link>
  </Why>
);

export default SecondPage;
