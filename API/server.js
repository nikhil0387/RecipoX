import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/user.js';
import recipeRouter from './routes/recipe.js';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
     origin: [
      "http://localhost:5173",
      "https://recipox.vercel.app",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

// userRouter
app.use('/api', userRouter);

// recipeRouter
app.use('/api', recipeRouter);

mongoose.connect(
    "mongodb+srv://nikhilsharma0387_db_user:CRSzyn7qyaaVmDpn@cluster0.4ftq6jk.mongodb.net/",
    { dbName: "RecipoX" }
)
.then(() => console.log("MongoDB is Connected..!"))
.catch((err) => console.log(err.message));

const port = 3000;
app.listen(port, () => console.log(`server is running on port ${port}`));