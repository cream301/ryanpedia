import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Header from '../components/header';
import './index.css';
import Topbar from '../components/TopBar';
import Sidebar from '../components/SideBar';
import Fav from '../images/Favicon.png';

const PageGrid = styled.div`
  display:grid;
  grid-template-columns: 1fr 8fr;
  grid-template-rows: 1fr 30fr;
  grid-template-areas: "sidebar topbar"
                       "sidebar content";
  background-image: linear-gradient(white,#afafaf36 30%);
`;

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
    { name: 'description', content: 'Sample' },
    { name: 'keywords', content: 'sample, something' },
  ]}
      link={[
    { rel: 'shortcut icon', type: 'image/png', href: Fav },
    {
      rel: 'stylesheet',
      href: 'https://use.fontawesome.com/releases/v5.0.12/css/all.css',
      integrity: 'sha384-G0fIWCsCzJIMAVNQPfjH08cyYaUtMwjJwqiRKxxE/rx96Uroj1BtIQ6MLJuheaO9',
      crossorigin: 'anonymous',
    },
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
    sizes(maxWidth: 400){
      ...GatsbyImageSharpSizes
    }
  }
  }
`;
