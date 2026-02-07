
import express, { type Application } from 'express';
import { USERNAME_MIN } from '@repo/constants';

const app: Application = express()
 
app.use(express.json());

const PORT = 5000;
app.listen(PORT, () => {
    console.log(USERNAME_MIN)
    console.log(`Listening at port ${PORT}`);
})  

export default app;