import React, {Component} from 'react';
import { TableRow, TableCell } from '@material-ui/core';
class Location extends Component{
    render(){
        return(
            <TableRow>
                <TableCell>{this.props.id}</TableCell>
                <TableCell><img src={this.props.image} alt="profile"/></TableCell>
                <TableCell>{this.props.name}</TableCell>
                <TableCell>{this.props.lat}</TableCell>
                <TableCell>{this.props.lon}</TableCell>
            </TableRow>
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