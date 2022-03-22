const express = require("express");
const router = express.Router();

router.get('/location', (req, res) => {
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

module.exports = router;