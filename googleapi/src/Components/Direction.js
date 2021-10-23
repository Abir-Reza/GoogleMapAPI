import React, { useState } from 'react';
import { DirectionsRenderer, DirectionsService,LoadScript, GoogleMap } from '@react-google-maps/api';


const location = {
    lat: 54.323292,
    lng: 10.122765
  };
const Direction = ({origin,destination}) => {
    const [response,setResponse] = useState(null);
    const directionCallback = (res) => {
        if (res != null) {
            setResponse(res);
        }
    }
    return (
        <div>
            <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY}>
                <GoogleMap
                // required
                id='direction-example'
                // required
                mapContainerStyle={{
                height: '400px',
                width: '100%'
                }}
                // required
                zoom={14}
                // required
                center={location}          
            >
            
                <DirectionsService
                  // required
                  options={{ 
                    origin: origin,  
                    destination: destination,
                    
                    travelMode: "DRIVING"
                  }}
                  callback = {directionCallback}
                />
             
                {
                response !== null && (
                    <DirectionsRenderer
                    // required
                    options={{ 
                        directions: response
                    }}
                    
                    />
                )
                }
                </GoogleMap>
            </LoadScript>
        </div>
    );
};

export default Direction;