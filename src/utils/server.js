const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/votingSystem', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create a Leader schema and model
const leaderSchema = new mongoose.Schema({
  name: String,
  votes: { type: Number, default: 0 },
});
const Leader = mongoose.model('Leader', leaderSchema);

// Fetch Leaders
app.get('/leaders', async (req, res) => {
  try {
    const leaders = await Leader.find();
    res.json(leaders);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Handle Vote
app.post('/vote', async (req, res) => {
  const { leaderId, walletAddress } = req.body;
  try {
    // Check if the wallet address has already voted
    const existingVote = await Leader.findOne({ _id: leaderId, voters: walletAddress });
    if (existingVote) {
      return res.status(400).json({ error: 'You have already voted for this leader.' });
    }

    // Update the vote count and add the wallet address to voters
    const updatedLeader = await Leader.findByIdAndUpdate(
      leaderId,
      { $inc: { votes: 1 }, $push: { voters: walletAddress } },
      { new: true }
    );

    res.json(updatedLeader);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(3000);

