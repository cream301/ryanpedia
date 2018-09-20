import React from 'react';
import Scrollchor from 'react-scrollchor';
import styled from 'styled-components';

const Content = styled.div`
  grid-area: navbox;
  display:grid;
`;
const TableOfContent = styled.div`
  display:inline-block;
  width:fit-content;
  height:auto;
  align-self: start;
  padding:.5vh;
  color:black;
  border: 1px solid #a2a9b1;
  background-color: #f8f9fa;
  font-size: 13px;
  & > *{
    display:inline-block
  }
  p{
      width: auto;
      text-align:left;
      margin-bottom:0;
      font-weight:bold;
  }
  ol{
    margin-bottom:0;
    line-height: 1.25rem;
  }
  li{
    margin-bottom:0;
    width:auto;
    a:after{
      content:'';
    }
  }
`;

class ContentBox extends React.Component {
  constructor(props) {
    super(props);
    this.links = this.props.links;
    this.nestedList = (link) => {
      if (typeof (link) === 'object') {
        return <ol key={`${link} list`}>{link.map(this.nestedList)}</ol>;
      } else if (typeof (link) === 'string') {
        return <li key={link}><Scrollchor to={link.split(' ').join('_')}>{link}</Scrollchor></li>;
      }
    };
  }
  render() {
    return (
      <Content>
        <TableOfContent>
          <p>Contents</p><br />
          <ol>{this.links.map(this.nestedList)}</ol>
        </TableOfContent>
      </Content>
    );
  }
}
export default ContentBox;
