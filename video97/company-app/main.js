const express = require('express');
const mongoose = require('mongoose');
const Employee = require('./models/Employee');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Failed to connect to MongoDB', err));

// Route to generate dummy data
app.post('/generate-data', async (req, res) => {
    // Clear the collection
    await Employee.deleteMany({});

    // Dummy data
    const dummyData = [
        { name: "Harry", salary: 45000000, language: "Python", city: "New York", isManager: true },
        { name: "Sally", salary: 55000000, language: "JavaScript", city: "San Francisco", isManager: false },
        { name: "John", salary: 60000000, language: "Java", city: "Los Angeles", isManager: true },
        { name: "Emma", salary: 50000000, language: "Ruby", city: "Chicago", isManager: false },
        { name: "Mike", salary: 65000000, language: "Go", city: "Seattle", isManager: true },
        { name: "Lucy", salary: 47000000, language: "C#", city: "Boston", isManager: false },
        { name: "Robert", salary: 53000000, language: "PHP", city: "Miami", isManager: true },
        { name: "Anna", salary: 49000000, language: "C++", city: "Denver", isManager: false },
        { name: "David", salary: 62000000, language: "Swift", city: "Austin", isManager: true },
        { name: "Sophia", salary: 48000000, language: "TypeScript", city: "Portland", isManager: false },
    ];

    // Insert the dummy data into the collection
    await Employee.insertMany(dummyData);

    res.status(200).send('Dummy data generated and collection cleared');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
