const db = require( './db-connect');
const express = require( "express" );
const cors = require('cors');
const app = express();

//User login/signup imports
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');


const { User } = require('./models/userModel');
const { Task } = require('./models/taskModel');
const { authenticateToken } = require('./middleware/authenticateToken');

app.use(cors());
app.use(express.json());
app.use(cookieParser());

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

app.put("/tasks/:id", authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const updatedTask = await Task.findByIdAndUpdate(id, req.body, { new: true });
    return res.status(200).json(updatedTask);
  } catch (error) {
    console.error(error);
    return res.status(400).json({ error: 'Failed to process request' });
  }
  
});

app.post("/tasks/", authenticateToken, async (req, res) => {
  try {
    const newTask = new Task({...req.body});
    const addTask = await newTask.save();
    return res.status(201).json(addTask);
  } catch (error) {
    console.error(error);
    return res.status(400).json({ error: 'Failed to process request' });
  }
});

app.delete("/tasks/:id", authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTask = await Task.findByIdAndDelete(id);
    return res.status(200).json(deletedTask);
  } catch (error) {
    console.error(error);
    return res.status(400).json({ error: 'Failed to process request' });
  }
  
});

app.post('/register', async(req, res) => {
  try{
      //get all data from body
      const { name, email, password, role } = req.body;
      
      // all the data should exists
      if ( !(name && email && password && role) ) {
          return res.status(400).json({'error': 'All fields are required!'});
      }
      // check if user already exists
      const existingUser = await User.findOne( {email} );
      if (existingUser) {
          return res.status(400).json({'error': 'Email already exist!'});
      }
      // encrypt the password
     const encryptedPassword =  await bcrypt.hash(password, 10);
     // save the user
     const user = await User.create({
          name,
          email,
          password: encryptedPassword,
          role
     });
     // generate a token for user and send it
     const token = jwt.sign(
          {
              id: user._id,
              email
          },
          'secret',
          {
              expiresIn: '5h',
          }
     );

     user.token = token;
     user.password = undefined;

     return res.status(201).json(user);

  }catch(err) {
    return res.status(500).json({'error': 'Oops, Something bad occured !'});
  }
});

app.post('/login', async(req, res) => {
  try{
    // get all data from frontend
    const {email, password} = req.body;
    
    // validation
    if(!(email && password)){
      return res.status(400).json({'error': 'All fields are required!'});
    }
    // find user in DB
    const user = await User.findOne( {email} );
    // If user doesn't exist
    if (!user) {
      return res.status(400).json({ 'success': false, 'error': 'User not found' });
    }

    // Match the password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (isPasswordValid) {

      const token = jwt.sign(
        {
          id: user._id,
          email,
        },
        'secret',
        {
          expiresIn: '5h',
        }
      );
      
      // send a token
      user.token = token;
      user.password = undefined;

      // //cookie section
      // const options = {
      //   expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      //   httpOnly: true,
      // };

      // return res.status(201).cookie("token", token, options).json({
      //   success: true,
      //   token,
      //   user
      // });
      return res.status(201).json({
        token,
        user,
      })

    } else {
      // Incorrect password
      return res.status(401).json({ 'success': false, 'error': 'Incorrect password' });
    }
    
  }catch(err){
    return res.status(500).json({'error': 'Oops, Something bad occured !'});
  }
})
