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
		max-width:300px;
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
        width: '100%',
        marginBottom: '.5rem',
    }}
      src={logo.sizes.src}
      alt="Ryanpedia"
    />
    </Link>
    <div>
      <p>Interaction with Ryan</p>
      <ul>
        {/* <li>Podcast</li> */}
        <li><a href="https://twitter.com/ryguyguyry">Twitter</a></li>
        <li><a href="https://www.youtube.com/user/wediditsketch">We Did It</a></li>
        <li><a href="https://venmo.com/RyanCreamer?via=searchbox">Donate to Ryanpedia</a></li>
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
