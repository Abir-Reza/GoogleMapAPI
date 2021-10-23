import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const Map = () => {

    const containerStyle = {
        width: '70vw',
        height: '70vh'
      };
      
      const center = {
        lat: 54.323292,
        lng: 10.122765
      };
    return (
        <div >
            <h1> Google Map API</h1>
            <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={14}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
      </LoadScript>
            
        </div>
    );
};

export default Map;