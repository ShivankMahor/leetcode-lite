import express from 'express'
import router from './router/route.js';
import morgan from 'morgan'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config();

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({
  origin:"http://localhost:3000"
}))
mongoose.connect(`mongodb+srv://Shivank:${process.env.PASSWORD}@cluster0.ujaj6hf.mongodb.net/?retryWrites=true&w=majority`);
console.log('Mongoose Server Connected');
// Access the default connection
const db = mongoose.connection;

// Listen for the connection event
db.on('connected', () => {
  console.log('Connected to MongoDB');
});

// Listen for the error event
db.on('error', (err) => {
  console.error(`MongoDB connection error: ${err}`);
});

// Listen for the disconnection event
db.on('disconnected', () => {
  console.log('Disconnected from MongoDB');
});




app.use('/api',router)


app.get('/', (req,res)=>{
  res.status(200).json('Hello home')
  console.log('home');
})

console.log(`Port No. -> ${process.env.PORT}`);

try {
  app.listen(process.env.PORT, () => {
    console.log(`Server is listening at http:/localhost:${process.env.PORT}`);
  });
} catch (err) {
  console.log("Server Error")
};