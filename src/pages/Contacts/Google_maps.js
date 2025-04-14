import React from "react";
import "./Google_maps.css";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

// API Key Google Maps
const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const mapStyles = {
  width: "100%",
  height: "100%",
};

const greyStyle = [
  {
    featureType: "landscape",
    stylers: [{ saturation: -100 }, { lightness: 65 }, { visibility: "on" }],
  },
  {
    featureType: "poi",
    stylers: [{ saturation: -100 }, { lightness: 51 }, { visibility: "simplified" }],
  },
  {
    featureType: "road.highway",
    stylers: [{ saturation: -100 }, { visibility: "simplified" }],
  },
  {
    featureType: "road.arterial",
    stylers: [{ saturation: -100 }, { lightness: 30 }, { visibility: "on" }],
  },
  {
    featureType: "road.local",
    stylers: [{ saturation: -100 }, { lightness: 40 }, { visibility: "on" }],
  },
  {
    featureType: "administrative.province",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "water",
    elementType: "labels",
    stylers: [{ lightness: -25 }, { saturation: -100 }, { visibility: "on" }],
  },
];

function MapContainer({ google }) {
  const onMapClicked = () => {
    console.log("Map clicked");
  };

  return (
    <div className="gmap">
      <Map
        google={google}
        zoom={14}
        style={mapStyles}
        styles={greyStyle}
        initialCenter={{ lat: 48.883577, lng: 2.2694351 }}
        onClick={onMapClicked}
      >
        <Marker
          title="Purpan Hospital"
          name="Purpan Hospital"
          position={{ lat: 43.695653, lng: 7.287631 }}
        />
      </Map>
    </div>
  );
}

const WrappedMap = GoogleApiWrapper({ apiKey })(MapContainer);

export default WrappedMap;
