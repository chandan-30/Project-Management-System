const mongoose = require( "mongoose" );
const dotenv = require( "dotenv" );
const express = require( "express" );
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

dotenv.config({ path: '../.env' });
const URI = process.env.MONGODB_URI;


async function connect() {
    try{
        await mongoose.connect( URI );
        console.log( "Successfully Connected to Database" );
        
    } catch( error ) {
        // Send a 5xx response along with an error message
        app.use((req, res) => {
        res.status(500).json({ error: 'Internal Server Error' });
      });
        console.error( "Failed to Connect to Database, ", error );
    } 
}

module.exports = { connect };