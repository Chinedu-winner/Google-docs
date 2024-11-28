const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('YOUR_MONGO_CONNECTION_URI', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Schema for Notes
const noteSchema = new mongoose.Schema({
  title: String,
  content: String,
  color: String,
  createdAt: { type: Date, default: Date.now }
});

const Note = mongoose.model('Note', noteSchema);

// API to create a note
app.post('/notes', async (req, res) => {
  try {
    const { title, content, color } = req.body;
    const newNote = new Note({ title, content, color });
    await newNote.save();
    res.json(newNote);
  } catch (err) {
    res.status(500).json({ message: 'Error creating note', error: err });
  }
});

// API to get all notes
app.get('/notes', async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching notes', error: err });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
