import React from 'react';
import styled from 'styled-components';

const ProfileBox = styled.div`
  grid-area:imagebox;
`;
const ProContainer = styled.div`
  width:70%;
  margin-left:auto;
  margin-right:auto
  height:auto;
  display:grid;
  grid-template-columns:1fr;
  grid-auto-rows: auto auto;
  border: 1px solid #a2a9b1;
  background-color: #f8f9fa;
`;
const ProfilePic = styled.div`
  display:grid;
  grid-template-columns: auto;
  grid-template-rows:  auto auto auto;
  text-align:center;
  img{
    width:65%;
    margin-left:auto;
    margin-right:auto;
    margin-bottom:2px;
  }
  p:nth-child(1){
    margin:0px;
    padding:0px;
    margin-bottom:5px;
    font-size:18px;
  }
  p:nth-child(3){
    margin:0px;
    padding:0px;
    font-size:15px;
  }
`;
const ProfileInfo = styled.div`
  display:grid;
  grid-template-columns: auto;
  grid-template-rows:repeat(auto, 6);
  font-size:14px;
  div.infoRow{
    display:grid;
    grid-template-columns:1fr 3fr;
    grid-template-rows:auto;
    padding-top:5px;
    & > div:nth-child(odd){
      font-weight:bold;
      margin-left:10px;
    }
  }
`;
const ImageBox = data => (
  <ProfileBox>
    <ProContainer>
      <ProfilePic>
        <p><b>Ryan Creamer</b></p>
        <img src={data.headshot.sizes.src} alt="Ryan Creamer Headshot" />
        <p />
      </ProfilePic>
      <ProfileInfo>
        {data.probox.map(info => (
          <div key={info[0]} className="infoRow">
            <div>{info[0]}</div>
            <div>{info[1]}</div>
          </div>
          ))}
      </ProfileInfo>
    </ProContainer>
  </ProfileBox>

);

export default ImageBox;

