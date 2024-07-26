
const express = require('express');
const mongoose = require('mongoose');
const Food = require('./models/food');
const cors = require('cors');

mongoose.connect('mongodb://localhost:27017/react-food-app')
  .then(() => console.log('MongoDB connection successful'))
  .catch((err) => console.error('MongoDB connection error:', err));

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.get('/food', async (req, res) => {
  try {
    const foods = await Food.find({});
    res.status(200).json(foods);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.post('/food', async (req, res) => {
  console.log(req.body);
  try {
    const newFood = new Food(req.body);
    await newFood.save();
    res.status(201).send('Food created successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});