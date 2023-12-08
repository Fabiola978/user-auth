import { json } from "express";
import express from "express";
const app = express();

const PORT = 5400;

app.use(json());

app.listen(PORT, () => {
    console.log('Server listening on PORT ', PORT);
    
})