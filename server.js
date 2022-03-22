const express = require('express');
const bodyPraser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyPraser.json());
app.use(bodyPraser.urlencoded({extended: true}));

app.get('/api/hello', (req, res) => {
    res.send({message : 'Hello express'});
});

app.listen(port, () => console.log('Listening on port ${port}'));