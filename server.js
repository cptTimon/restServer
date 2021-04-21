const express = require('express');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const db = require('./db');

const app = express();
const testimonialsRoutes = require('./routes/testimonials.routes');
const concertsRoutes = require('./routes/concerts.routes');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', testimonialsRoutes);
app.use('/api', concertsRoutes);


app.get('/seats', (req,res) => {
  res.json(db.seats);
});

app.get('/seats/:id', (req,res) => {
  res.json(db.concerts.find(seat => seat.id == req.params.id));
});

app.post('/seats', (req,res) => {
  const seat = {
    id: uuidv4(),
    day: req.body.day,
    seat: req.body.seat,
    client: req.body.client,
    email: req.body.email
  };
  db.seats.push(seat);
  return res.json(seat);
});

app.delete('/seats/:id', (req,res) => {
  db.seats.forEach(seat => {
    if(seat.id == req.params.id) {
      const index = db.seats.indexOf(seat);
      db.seats.splice(index,1);
    }
  })
  return res.json(db.seats);
});

app.put('/seats/:id', (req,res) => {
  db.seats.forEach(seat => {
    if(seat.id == req.params.id){
      seat.day = req.body.day,
      seat.seat = req.body.seat,
      seat.client = req.body.client,
      seat.email = req.body.email
    }
  });
  return res.json(db.seats);
});

app.use((req,res) => {
  return res.json({
    message: 'Not found...'
  });
});


app.listen('8000',() => {
  console.log(path.join(__dirname, 'Server is running on port 8000'));
});