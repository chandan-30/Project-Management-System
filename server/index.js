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

app.put("/tasks/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedTask = await Task.findByIdAndUpdate(id, req.body, { new: true });
    return res.status(200).json(updatedTask);
  } catch (error) {
    console.error(error);
    return res.status(400).json({ error: 'Failed to process request' });
  }
  
});

app.post("/tasks/", async (req, res) => {
  try {
    const newTask = new Task({...req.body});
    const addTask = await newTask.save();
    return res.status(201).json(addTask);
  } catch (error) {
    console.error(error);
    return res.status(400).json({ error: 'Failed to process request' });
  }
});

app.delete("/tasks/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTask = await Task.findByIdAndDelete(id);
    return res.status(200).json(deletedTask);
  } catch (error) {
    console.error(error);
    return res.status(400).json({ error: 'Failed to process request' });
  }
  
});
