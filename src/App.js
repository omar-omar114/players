import Navbars from './Navbar/Navbars';
import PlayerList from './playerlist/PlayerList.js';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Detail from './Detail/Detail';


function App() {


    return(

        <BrowserRouter>
        <Navbars />
        <Routes>
          <Route path='/' element={<PlayerList/>}/>
          <Route path='/Detail' element={<Detail/>}/>
        </Routes>
        </BrowserRouter>
        
  
 
      
    );
 
    
    
  
}

export default App;
