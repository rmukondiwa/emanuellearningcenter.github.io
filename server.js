const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files (HTML, CSS, JS) from the root directory
app.use(express.static(__dirname));  

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected to blog database'))
.catch(err => console.error("❌ MongoDB connection error:", err));

// Define the schema for blog entries
const blogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    category: String,
    author: { type: String, default: 'Anonymous' },
    votes: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now }
});

const BlogEntry = mongoose.model('BlogEntry', blogSchema, "blogentries");

// 🚀 API to Retrieve All Blog Entries
app.get('/api/blogentries', async (req, res) => {
    try {
        const entries = await BlogEntry.find({}).sort({ createdAt: -1 });
        res.json(entries);
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// 🔍 Search Blog Entries
app.get('/api/search', async (req, res) => {
    const query = req.query.q;
    try {
        const results = await BlogEntry.find({
            $or: [
                { title: { $regex: query, $options: 'i' } },
                { content: { $regex: query, $options: 'i' } }
            ]
        }).limit(10);
        res.json(results);
    } catch (error) {
        res.status(500).json({ error: "Search failed" });
    }
});

// ✍ Submit a New Blog Entry
app.post('/api/blogentries', async (req, res) => {
    console.log("Received blog entry:", req.body); // Debugging
    const { title, content, category, author } = req.body;
    try {
        const newEntry = await BlogEntry.create({
            title,
            content,
            category,
            author: author || 'Anonymous'
        });
        console.log("Saved to MongoDB:", newEntry); // Debugging
        res.json({ success: true, message: "Blog entry submitted successfully!" });
    } catch (error) {
        console.error("Error saving blog:", error);
        res.status(400).json({ success: false, error: error.message });
    }
});

// 👍 Upvote a Blog Entry
app.post('/api/blogentries/vote/:id', async (req, res) => {
    try {
        const entryId = req.params.id;
        await BlogEntry.findByIdAndUpdate(entryId, { $inc: { votes: 1 } });
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ success: false, error: "Error upvoting entry" });
    }
});

// 🌎 Serve index.html for all unknown routes (so it works with your existing files)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start Server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
