const express = require('express');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const db = require('./db');

const app = express();
const testimonialsRoutes = require('./routes/testimonials.routes');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', testimonialsRoutes);

app.get('/concerts', (req,res) => {
  res.json(db.concerts);
});

app.get('/concerts/:id', (req,res) => {
  res.json(db.concerts.find(item => item.id == req.params.id));
});

app.post('/concerts/', (req,res) => {
  const concert = {
    id: uuidv4(),
    performer: req.body.performer,
    genre: req.body.genre,
    price: req.body.price,
    day: req.body.day,
    image: req.body.image
  };
  db.concerts.push(concert);
  return res.json(concert);
});

app.delete('/concerts/:id', (req,res) => {
  db.concerts.forEach(concert => {
    if(concert.id == req.params.id) {
      const index = db.concerts.indexOf(concert);
      db.concerts.splice(index,1);
    }
  });
  return res.json(db.concerts);
});

app.put('/concerts/:id', (req,res) => {
  db.concerts.forEach(concert => {
    if(concert.id == req.params.id) {
      concert.performer = req.body.performer,
      concert.genre = req.body.genre,
      concert.price = req.body.price,
      concert.day = req.body.day,
      concert.image = req.body.image
    }
  });
  return res.json(db.concerts);
});


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