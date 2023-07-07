

import './PlayerList.css'
import Player from '../player/Player'; 
import {players} from "./Players"





function PlayerList() {
  return (
    <div className='cardlist-flex'>
     <div className='cards'>
     {
          players.map((player,index) =>
               <Player player={player} key={index}
               />)
     }
     </div>
  
    
     
    </div>
    
    
  );
}



export default PlayerList;