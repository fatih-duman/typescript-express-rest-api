import express, { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World");
});

app.listen(5000, () => console.log("Server listening on http://localhost:5000"));