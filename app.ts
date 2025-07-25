import express, { Request, Response } from 'express';
import cors from "cors";
import cookiesParser from "cookie-parser";
import dotenv from 'dotenv';
import notFound from './src/app/notFound';
dotenv.config();

const PORT = 5000;

// Baisc Middleware

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookiesParser());

app.use({
    origin: ["http://localhost:5173"],
    credential: true,
})


// Home route
const homeRoute = (req: Request, res: Response) => {
    return res.status(200).json({ 
        server: "Active",
        success: true,
        status: 200,
        message: "This is home route"
     })
}

app.get("/", homeRoute);


app.use(notFound as unknown as express.ErrorRequestHandler);

export default app

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
