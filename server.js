const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const testimonialsRoutes = require('./routes/testimonials.routes');
const concertsRoutes = require('./routes/concerts.routes');
const seatsRoutes = require('./routes/seats.routes');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/api', testimonialsRoutes);
app.use('/api', concertsRoutes);
app.use('/api', seatsRoutes);

app.use((req,res) => {
  return res.status(404).json({
    message: 'Not found...'
  });
});

app.listen('8000',() => {
  console.log(path.join(__dirname, 'Server is running on port 8000'));
});