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

export default Location;