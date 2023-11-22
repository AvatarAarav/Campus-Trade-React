import React from "react";
import { Instagram, LinkedIn, Mail } from '@mui/icons-material'

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <img className="circle-img" src={props.img} alt="avatar_img" />
      </div>
      <div className="bottom">
        <a href={props.prof}><LinkedIn /></a>
        <a href={props.insta} ><Instagram /></a>
        <p className="info">{props.info}</p>
      </div>
    </div>
  );
}

export default Card;