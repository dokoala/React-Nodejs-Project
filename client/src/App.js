import axios from "axios";
import {useEffect} from "react";
import { Component } from 'react';
import Location from './components/Location';
import {
  Table, 
  TableHead, 
  TableBody, 
  TableCell, 
  TableRow, 
  Paper,
  withStyles,
  CircularProgress} from '@material-ui/core'

import './App.css';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX : "auto"
  },
  table: {
    minWidth: 1080
  },
  progress: {
    margin: theme.spacing.unit * 2,
  }
});

class App extends Component{

  state = { //변경될수 있는 변수 관리 state
    locations: "",
    completed: 0
  }

  progress = () =>{
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1});
  }

  componentDidMount() {
    this.timer = setInterval(this.progress, 20);
    this.callApi()
      .then(res => this.setState({locations: res}))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    console.log(2222222);
    const response = await fetch('/api/locations');
    console.log(response)
    const body = await response.json();
    console.log(body)
    return body;
  }

  render(){
    console.log(this.state.locations)
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
            this.state.locations ? this.state.locations.map(c => {
              return (
                <Location
                  id = {c.id}
                  image = {c.image}
                  name = {c.name}
                  lat = {c.lat}
                  lon = {c.lon}
                />
              )
            }) : 
            <TableRow>
              <TableCell colSpan="6" align="center">
                <CircularProgress className={classes.progress} variant="determinate" value={this.state.completed}/>
              </TableCell>
            </TableRow>}
          </TableBody>
        </Table>
      </Paper>      
    );
  }
}

export default withStyles(styles)(App);
