const express = require('express');
const bodyPraser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyPraser.json());
app.use(bodyPraser.urlencoded({extended: true}));

app.get('/api/locations', (req, res) => {
    res.send([
      {
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
      }
    ]);
});

app.listen(port, () => console.log('Listening on port '+ port));