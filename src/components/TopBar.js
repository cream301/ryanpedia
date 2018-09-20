import React from 'react';
import styled from 'styled-components';

const Top = styled.div`
  grid-area:topbar;
  display:grid;
  grid-template-columns:auto;
  grid-template-rows: auto auto auto;
  position:relative;
  font-family:sans-serif;
  font-size: .7rem;
  div#siteby{
    display:grid;
    justify-items: right;
    padding-right: 1.25vw;
  }
  span{
    font-size:10px;
    a{
      text-decoration:none;
    }
    a:hover{
      color:blue;
    }
  }
  div#donationbox{
    display:grid;
    grid-template-columns: 2rem auto 1rem;
    grid-template-rows: auto;
    background-color:#FFCC00;
    color:black;
    font-weight:bold;
    height:auto;
    min-height:3rem;
    padding-bottom:1vh;
    div{
      display:grid;
      justify-items:center;
      font-size:10px;
      div.info-circle-logo{
        margin-top:.25vh;
        background-color:#2db0ed;
        color:white;
        border-radius:30px;
        width:17px;
        height:17px;
        display:grid;
        i{
          justify-self: center;
          padding-top: .1vh;
        }
      }
    }
    div.close{
      margin-top:.5vh;
      i{
        padding-top:.25vh;
      }
    }
    span{
      font-size: inherit;
      position:relative
      button{
        background-color:inherit;
        border: solid black 1px;
        margin-left:1vh;
        cursor:pointer;
      }
    }
  }
  ul{
    display:grid;
    grid-template-columns: 5rem 3rem auto;
    grid-template-rows:auto;
    list-style:none;
    padding:0;
    margin:0;
    width:100%;
    background-color:transparent;
    li{
      padding:0px 5px 0px 5px;
      margin:0;
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
class TopBar extends React.Component {
    state = {
      Donation: true,
    };
    closeDonation = () => {
      this.setState({
        Donation: !this.state.Donation,
      });
    }
    render() {
      return (
        <Top >
          <div id="siteby"><span>site made by <a href="https://twitter.com/liam_paris">Liam Paris</a></span></div>
          { this.state.Donation ? (
            <div id="donationbox"><div><div className="info-circle-logo"><i className="fa fa-info" aria-hidden="true" /></div></div>
              <span><em>Dear Ryanpedia readers</em>: We are the small team that runs this #5 website in the
                world. To protect our independence, we'll never run ads. We take no government funds.
                We run on donations sent directly to Ryan Creamer's bank account. If everyone reading this
                gave $5, Ryan Creamer would have a lot more money than he does currently.
                <em>Thank you, from the Ryanpedia Foundation</em>.
                <a href="https://venmo.com/RyanCreamer?via=searchbox"><button>Please Help</button></a>
              </span>
              <div className="close" onClick={this.closeDonation} onTouchStart={this.closeDonation} ><i className="fas fa-times" /></div>
            </div>) : (<div id="donationbox" style={{ backgroundColor: 'inherit' }} />)
          }
          <ul>
            <li>Main Page</li>
            <li><a href="mailto:ryancreamer301@gmail.com">Talk</a></li>
            <li />
          </ul>
        </Top>
      );
    }
}

export default TopBar;
