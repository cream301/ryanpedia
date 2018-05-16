import React from 'react';
import Link from 'gatsby-link';

import styled from 'styled-components';

const Top = styled.div`
	grid-area:topbar;
	position:relative;
	font-family:sans-serif;
	font-size: .7rem;
	span{
	      position:absolute;
	      top:0px;
	      right:10px;
	      font-size:10px
	      a{
	        text-decoration:none;
	      }
	      a:hover{
	        color:blue;
	      }
	    }
	ul{
	  display:grid;
	  grid-template-columns: 5rem 3rem auto;
	  grid-template-rows:auto;
	  position: absolute;
	  bottom:0px;
	  left:0px;
	  list-style:none;
	  padding:0px;
	  margin:0px;
	  width:100%;
	  background-color:transparent;
	  li{
	    padding:0px 5px 0px 5px;
	    margin:0px;
	    background-color:white;
	    color:black;
	    border-width:1px;
	    border-style:solid;
	    border-color: #a7d7f9;
	    border-top:none;
	    border-bottom: 1px solid #a7d7f9;
	    width:auto;
	  }
	  li:nth-child(1){
	    border-bottom:none;
	  }
	  li:nth-child(2){
	    border-left:none;
	    background-image:linear-gradient(white,#a7d7f97a 100%);
			a{
				text-decoration:none;
				color:black;
			}
			a:hover{
				border-bottom:1px solid black;
			}
	  }
	  li:nth-child(3){
	    border-left:none;
	    border-right:none;
	    background-color:transparent !important;
	  }
	}
`;
const TopBar = () => (
  <Top >
    <span>site made by <a href="https://twitter.com/liam_paris">Liam Paris</a></span>
    <ul>
      <li>Main Page</li>
      <li><a href="mailto:ryancreamer301@gmail.com">Talk</a></li>
      <li />
    </ul>
  </Top>
);

export default TopBar;
