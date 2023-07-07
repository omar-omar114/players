import { Button,Card } from 'react-bootstrap';
import './Player.css'
import { Link } from 'react-router-dom';



function Player({player}) {
  return (
    
      <div>
        
        <Card className='card' style={{ width: '16rem' }}>
          <Card.Img style={{ height: '200px'}} variant="top" src={player.image} />
            <Card.Body>
              <Card.Title>{player.name}</Card.Title>
                <Card.Text>
                 Age: {player.age}
                </Card.Text>
                <Link to='/Detail' state={player}><Button variant="warning">More Details </Button></Link>
            </Card.Body>
        </Card>
        
                
          
          
      </div>
    
      
       
   
    
  );
}

Player.defaultProps = {

  anime : {
    image : 'anime2.jpg',
    title: 'Dragon ball',
    description : 'some quick example text to build on the card title and make up the bulkof the card component',
  }
}


export default Player;