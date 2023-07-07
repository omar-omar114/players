import React from 'react';
import { Button} from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import './Detail.css';

const Detail = () => {
     const location = useLocation();
     const player = location.state;
  return (
    <div>
     <div class="detail-anime container">
          <div class="image-anime grid-container">
               <img src={player.image} alt="anime"/>
          </div>
          <div class="desciption-anime grid-container">
               <div class="title-anime"><h3>{player.name}</h3></div>
               <div class="text-description">
                    <p>{player.description}</p>
               </div>
               <div class="text-date"><p>general informations about the player</p></div>
               <div class="btns-type">
                    <ul>
                         <li class="first">{player.team}</li>
                         <li class="second">{player.nationality}</li>
                         <li class="third">{player.jersyNumber}</li>
                    </ul>
               </div>
               
          </div>
     </div>
    </div>
  )
}

export default Detail