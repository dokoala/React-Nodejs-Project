import { Component } from 'react';
import Location from './components/Location';
import './App.css';

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
    return(
      <div>
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
      </div>      
    );
  }
}

export default App;
