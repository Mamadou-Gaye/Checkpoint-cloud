import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const MapContainer = styled.div`
  width: 80%;
  height: 80%;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const center = {
  lat: -3.745,
  lng: -38.523
};

const App = () => {
  return (
    <Container>
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <MapContainer>
          <GoogleMap
            mapContainerStyle={{ width: '100%', height: '100%' }}
            center={center}
            zoom={10}
          >
            {/* You can add markers, info windows, etc. here */}
          </GoogleMap>
        </MapContainer>
      </LoadScript>
    </Container>
  );
};

export default App;