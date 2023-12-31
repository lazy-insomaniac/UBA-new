import React from 'react'
import '../Css/IdentityCard.css'


const IdentityCard = (props) => {
    return (
        <div className="donatores">
            <div className="avatar"> <img className="img-responsive" src={props.image} style={{objectFit:"fill"}} alt=""  /> </div>
                  <div className="donor-details">
                    <h5>{props.name}</h5>
                    <p className="font-lora">{props.designation}</p>
                    <span className="font-lora"> 
                    <a href={props.link}>
                        <strong>Visit profile</strong>
                    </a> 
                    </span> 
            </div>
        </div>
    )
}

export default IdentityCard;
