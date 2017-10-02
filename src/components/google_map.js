import React, { Component } from 'react';

class GoogleMap extends Component {

    componentDidMount() {
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        })
    }
    render() {
        return <div ref='map' /> // this.refes.map
        
    }
}

export default GoogleMap;

/*{ <GoogleMapLoader 
    containerElement={ <div style={{height: '100%'}} /> }
    googleMapElement={
        <GoogleMap defaultZoom={12} defaultCenter={{lat: props.lat, lng: props.lng}} />
    }
/> }*/