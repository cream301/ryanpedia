import React from 'react';
import Link from 'gatsby-link';
import { sortSections, nestedArrays, sortNav, handleData } from '../helpFunctions';
import MainPage from '../components/MainPage';

const IndexPage = ({ data }) => ({
  render() {
    const wikiData = handleData(data);
    return (
      <MainPage
        contentLinks={wikiData.contentLinks}
        titleBody={wikiData.titleBody}
        sections={wikiData.sections}
        probox={wikiData.probox}
        headshot={wikiData.headshot}
       />
    );
  },
});

export default IndexPage;

export const query = graphql`
  query mainPageQuery{
  site {
    siteMetadata {
      title
      desc
      probox
    }
  }
  allMarkdownRemark(sort: {fields: [frontmatter___num], order: ASC}) {
    edges {
      node {
        id
        frontmatter {
          title
          num
          type
        }
        headings{
          value
          depth
        }
        html
      }
    }
  }
  headShot: imageSharp(id:{regex:"/headshot.jpg/"}){
    sizes(maxWidth:350){
      ...GatsbyImageSharpSizes
    }
  }
}
`;
