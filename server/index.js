const db = require( './db-connect');
const express = require( "express" );
const cors = require('cors');
const app = express();
const { User } = require('./models/userModel');
const { Task } = require('./models/taskModel');

app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 8000;

db.connect();

app.listen( PORT, () => {
    console.log( `Server running on port ${ PORT }` );
});

app.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        return res.status(200).json(users);
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
});

app.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find();
        return res.status(200).json(tasks);
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
});
