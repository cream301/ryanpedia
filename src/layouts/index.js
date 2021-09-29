import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Header from '../components/header';
import './index.css';
import Topbar from '../components/TopBar';
import Sidebar from '../components/SideBar';
import Fav from '../images/Favicon.png';
import '../../static/assets/web-fonts-with-css/css/fontawesome-all.min.css';

const PageGrid = styled.div`
  display:grid;
  grid-template-columns: 10rem 8fr;
  grid-template-rows: auto 30fr;
  grid-template-areas: "sidebar topbar"
                       "sidebar content";
  background-image: linear-gradient(white,#afafaf36 30%);
`;

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title="Ryan Creamer"
      meta={[
    { name: 'description', content: "Ryan Creamer's comedy portfolio. Please click and make the yearly Google Domain payments worth it." },
    { name: 'keywords', content: 'Ryan Creamer, pornhub, comedy, Ryan, Creamer, collegeHumor, Clickhole,' },
    { name: 'viewport', content: 'width=device-width, initial-scale=.5' },
  {name:"google-site-verification", content:"gmPyHVp4O2asQXGxqe-mczFszN5KN-3OQcnJP4UG4Ns"},
  ]}
      link={[
    { rel: 'shortcut icon', type: 'image/png', href: Fav },
   ]}
    /><PageGrid>
      <Topbar />
      <Sidebar logo={data.wikiLogo} />
      {children()}
      </PageGrid>


  </div>);

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
    wikiLogo: imageSharp(id:{regex:"/ryanpedia.png/"}){
    sizes(maxWidth: 250){
      ...GatsbyImageSharpSizes
    }
  }
  }
`;
