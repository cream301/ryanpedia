import React from 'react';
import Link from 'gatsby-link';

import styled from 'styled-components';

const Content = styled.div`
  background-color:white;
  font-weight: 300;
  h1{
  	border-bottom:solid 1px grey;
  	font-family: 'Linux Libertine','Georgia','Times',serif;
  	line-height: 1.3;
  	margin-bottom: 0.25em;
  	padding: 0;
  	font-size: 1.2em;
  	color:black;
  	position:relative;
  	i{
      position:absolute;
      bottom:10px;
      right:0px
      font-size:.6em;
    }
    iframe{
      width:300px;
      height:auto;
    }
  }
`;

class Section extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      html: props.data.node.html,
    };
  }
  componentDidMount() {
  	//put proper id's on h1s
    for (let i = 0; i < document.getElementsByTagName('h1').length; i++) {
      document.getElementsByTagName('h1')[i].id = document.getElementsByTagName('h1')[i].innerText.split(' ').join('_');
    }
    //put proper id's on h2s
    for (let i = 0; i < document.getElementsByTagName('h2').length; i++) {
      document.getElementsByTagName('h2')[i].id = document.getElementsByTagName('h2')[i].innerText.split(' ').join('_');
    }
    //turn markdown into iframe's
    for (let i = 0; i < document.getElementsByTagName('code').length; i++) {
      const frame = new DOMParser().parseFromString(document.getElementsByTagName('code')[i].innerText, 'text/html');
      const vid = frame.getElementsByTagName('iframe');
      const placeToPut = document.getElementsByTagName('code')[i].parentElement;
      placeToPut.innerHTML = null;
      placeToPut.appendChild(vid[0]);
    }
  }
  render() {
    return (
      <Content dangerouslySetInnerHTML={{ __html: this.state.html }} />
    );
  }
}

export default Section;
