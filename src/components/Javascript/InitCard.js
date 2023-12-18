import React from 'react'
import '../Css/InitCard.css';
import Popup_con from './Popup_con';


export const InitCard = (props) => {
  return (
    <>
      <div id="f_card">
        <div id="card_img">
          <img src={props.image} />
        </div>
        <div id="card_cont">
          <div id="card_head">
            {props.village}<span>{props.date}<br/><br/></span>
            <h4>{props.init}</h4>
          </div>
          <div id="card_main" style={{padding : "0.7rem"}}>
            {props.initiative}
          </div>
          {/* <button id="know_card">Know More</button> */}
          <Popup_con/>
        </div>
      </div>
    </>
  )
}