import React, {Component} from 'react';

class Location extends React.Component{
    render(){
        return(
            <div>
                <LocationData id={this.props.id} image={this.props.image} name={this.props.name}/>
                <LocationInfo lat={this.props.lat} lon={this.props.lon}/>
            </div>
        )
    }
}

class LocationData extends React.Component{
    render(){
        return(            
                <div>
                    <img src={this.props.image} alt="Data"/>
                    <h2>{this.props.name}({this.props.id})</h2>
                </div>
            )
    }
}

class LocationInfo extends React.Component{
    render(){
        return(            
                <div>
                    <p>{this.props.lat}</p>
                    <p>{this.props.lon}</p>
                </div>
            )
    }
}

export default Location;