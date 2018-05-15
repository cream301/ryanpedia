import React from 'react';
import Link from 'gatsby-link';
import Scrollchor from 'react-scrollchor';
import styled from 'styled-components';

const Content = styled.div`
  grid-area: navbox;
  display:grid;
  align-content:end;
`;
const TableOfContent = styled.div`
  display:inline-block;
  width:auto;
  height:auto;
  align-self: center;
  padding:5px;
  color:black;
  border: 1px solid #a2a9b1;
  background-color: #f8f9fa;
  font-size: 13.3px;
  p{
      text-align:left;
      margin-bottom:0px
      font-weight:bold;
  }
  ol{
    margin-bottom:0px;
    line-height: 1.25rem;
  }
  li{
    margin-bottom:0px;
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
        return <ol>{link.map(this.nestedList)}</ol>;
      } else if (typeof (link) === 'string') {
        return <li><Scrollchor to={link.split(' ').join('_')}>{link}</Scrollchor></li>;
      }
    };
  }
  render() {
    return (
      <Content>
        <TableOfContent>
          <p>Contents</p>
          <ol>{this.links.map(this.nestedList)}</ol>
        </TableOfContent>
      </Content>
    );
  }
}
export default ContentBox;

/*
 [<span id="show_hide_button" onClick={this.hideShowBox}>hide</span>]
  ref={this.contentLinks}

  this.hideShowBox = this.hideShowBox.bind(this);
    this.contentLinks = React.createRef();
  }
  hideShowBox() {
    const navBox = this.contentLinks.current;
    navBox.classList.toggle('hideLinks');
    console.log('it happened!');
  }
 */
