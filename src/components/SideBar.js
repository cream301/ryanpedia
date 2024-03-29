import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

const Side = styled.div`
	grid-area:sidebar;
	height:100vh;
	font-family:sans-serif;
	font-weight:20;
	color:blue;
	padding: 0 2% 0 2%;
	& > Link > img{
		max-width:250px;
	}
	ul{
	  list-style:none;
	  margin: 0;
	}
	li{
	  line-height: 1.25em;
	    margin: 0;
	    padding: 0.15em 0;
	    font-size: 0.75em;
	    word-wrap: break-word;
	    color: #0645ad;
	    a{
	      text-decoration: none;
	      color: #0645ad;
	      background: none;
	    }
	    &:hover > a{
	      color:#0b0080;
	      border-bottom:1px solid
	    }
	}
	& > div,ul{
	  padding-left:8%;
	  ul{
	    padding-left:0;
	    margin-top:3%;
	  }
	}
	p{
	  font-size: 0.75em;
	  color: #444444;
	  border-bottom:1px solid #a2a9b1
	  margin-top:1rem;
	  margin-bottom:0rem;
	  line-height:1;
	}
`;
const SideBar = ({ logo }) => (
  <Side>
    <Link to="/"><img
      style={{
        paddingTop: '1rem',
        width: '95%',
        marginBottom: '.5rem',
    }}
      src={logo.sizes.src}
      alt="Ryanpedia logo"
    />
    </Link>
    <div>
      <p>Contact Ryan</p>
      <ul>
	<li><a href="mailto:ryancreamer301@gmail.com">Email</a></li>
	<li><a href="https://twitter.com/ryguyguyry">Twitter</a></li>
	<li><a href="https://www.instagram.com/coolboyryan/">Instagram</a></li>
      </ul>
    </div>

  </Side>
);

export default SideBar;

SideBar.propTypes = {
  logo: PropTypes.shape({
    sizes: PropTypes.object.isRequired,
  }).isRequired,
};
