import { Component } from 'react';
import Location from './components/Location';
import {
  Table, 
  TableHead, 
  TableBody, 
  TableCell, 
  TableRow, 
  Paper,
  withStyles} from '@material-ui/core'
import './App.css';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX : "auto"
  },
  table: {
    minWidth: 1080
  }
})

const location = [{
  'id' : 1,
  'image' : 'https//placeimage.com/64/64/2',
  'name' : "대구",
  'lat' : "123.33",
  'lon' : "267.33"
},
{
  'id' : 2,
  'image' : 'https//placeimage.com/64/64/3',
  'name' : "서울",
  'lat' : "124.33",
  'lon' : "265.33"
}]

class App extends Component{
  render(){
    const {classes} = this.props;
    return(
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableCell>번호</TableCell>
            <TableCell>사진</TableCell>
            <TableCell>위치</TableCell>
            <TableCell>위도</TableCell>
            <TableCell>경도</TableCell>
          </TableHead>
          <TableBody>
          {
            location.map(c => {
              return (
                <Location
                  id = {c.id}
                  image = {c.image}
                  name = {c.name}
                  lat = {c.lat}
                  lon = {c.lon}
                />
              )
            })
          }
          </TableBody>
        </Table>
      </Paper>      
    );
  }
}

export default withStyles(styles)(App);
