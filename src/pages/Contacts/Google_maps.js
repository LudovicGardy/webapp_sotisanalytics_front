import React, {Component} from "react";
import "./Google_maps.css";

import { Fade } from 'react-reveal';

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

 
const apiKey = 'AIzaSyDPxWsYNUh76-tPtsnONUQ8I0eSu-ZkSco';

const mapStyles = {
    width: "100%",
    height: "100%",
  };

  const greyStyle = [
    {
      featureType: "landscape",
      stylers: [
        { saturation: -100 },
        { lightness: 65 },
        { visibility: "on"},
      ],
    },

    {
      featureType: "poi",
      stylers: [
        { saturation: -100 },
        { lightness: 51 },
        { visibility: "simplified"},
      ]
    },


    {
      featureType: "road.highway",
      stylers: [
        { saturation: -100 },
        { visibility: "simplified"},
      ]
    },

    {
      featureType: "road.arterial",
      stylers: [
        { saturation: -100 },
        { lightness: 30 },
        { visibility: "on"},
      ]
    },      

    {
      featureType: "road.local",
      stylers: [
        { saturation: -100 },
        { lightness: 40 },
        { visibility: "on"},
      ]
    },

    {
      featureType: "administrative.province",
      stylers: [
        { visibility: "off"},
      ]
    },

    {
      featureType: "water",
      elementType: "labels",
      stylers: [
        { lightness: -25 },
        { saturation: -100 },
        { visibility: "on"},
      ]
    },

    // {
    //   featureType: "water",
    //   elementType: "geometry",
    //   stylers: [
    //     { hue : "#ffff00" },
    //     { lightness: -25 },
    //     { saturation: -97 },
    //   ]
    // },
  ];


function MapContainer(props) {

function onMapClicked() {
    // fonction de gestion de l'événement onClick
}


return (
    <>
    
    <div className="gmap">
        <Map
            google={props.google}
            zoom={14}
            style={mapStyles}
            styles={greyStyle}
            initialCenter={{
            lat: 48.883577,
            lng: 2.2694351,
            }}
            onClick={onMapClicked}
        >
            <Marker
            title={'Purpan Hospital'}
            name={'Purpan Hospital'}
            position={{ lat: 43.695653, lng: 7.287631 }}
            />
        </Map>
    </div>
    </>
);
}

export default GoogleApiWrapper({
  apiKey: (apiKey)
})(MapContainer)