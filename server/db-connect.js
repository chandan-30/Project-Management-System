const mongoose = require( "mongoose" );
const dotenv = require( "dotenv" );

dotenv.config({ path: '../.env' });
const URI = process.env.MONGODB_URI;

async function connect() {
    try{
        await mongoose.connect( URI );
        console.log( "Successfully Connected to Database" );
    } catch( error ) {
        console.error( "Failed to Connect to Database, ", error );
    } 
}

module.exports = { connect };