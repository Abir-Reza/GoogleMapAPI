import { useRef, useState } from 'react';
import './App.css';
import Direction from './Components/Direction';
import Map from './Components/Map';

function App() {
  const [origin,setOrigin] = useState('');
  const [destination,setDestination]= useState('');
  const originRef = useRef('');
  const destinationRef = useRef('');
  
  const handleDirection = (e) =>{
    setOrigin(originRef.current.value);
    setDestination(destinationRef.current.value);
    e.preventDefault();
  }
  return (
    <div className="App">
      <form onSubmit={handleDirection}>
        <input type="text" ref={originRef} placeholder='Start from'/>
        <br></br>
        <input type="text" ref={destinationRef} placeholder='Destination'/>
        <br></br>
        <input type='submit' value='Get Ride'/> 
        
      </form>
      <br></br>
     {/* <Map></Map> */}
     <Direction origin={origin} destination={destination}></Direction>
    </div>
  );
}

export default App;
