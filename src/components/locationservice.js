import React from 'react';
import {geolocated} from 'react-geolocated';
import { withGoogleMap, GoogleMap } from 'react-google-maps';

class LocationService extends React.Component {


//     getlistofhosp=() =>{
// const key = 'AIzaSyDFwzhrD7A7ZQry94NClpM4MHYNkeM-Af0'
// var latlon = this.props.coords.latitude + "," + this.props.coords.longitude
// var reqstr = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latlon}&radius=1500&type=hospital&key=${key}`
// fetch(reqstr,{method: 'POST',mode: 'cors',headers:{'Content-Type': 'application/json','Access-Control-Allow-Origin':''}} ).then( res => console.log(res) ).catch(err=>console.log(err))}

    render() {

    const GoogleMapExample = withGoogleMap(props => (
        <div>
        <GoogleMap
          defaultCenter = { { lat: this.props.coords.latitude, lng: this.props.coords.longitude } }
          defaultZoom = { 13 }
        >
        </GoogleMap>
            
        </div>
     ));


    const listofhosp = {}
    

    return !this.props.isGeolocationAvailable
      ? <div>Your browser does not support Geolocation</div>
      : !this.props.isGeolocationEnabled
        ? <div>Geolocation is not enabled</div>
        : this.props.coords
          ? 
                    <div>
                        

                                                
                        <p>{this.props.coords.latitude} {this.props.coords.longitude}</p>
                        <GoogleMapExample
                            containerElement={<div style={{ height: `500px`, width: '500px' }} />}
                            mapElement={<div style={{ height: `100%` }} />}
                        />
                    </div>

          : <div>Getting the location data&hellip; </div>;
  }
}
 
export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(LocationService);
