
import express,  { type Express, type Request, type Response } from 'express';
import { USERNAME_MIN } from '@repo/constants';

const app: any = express()
 
app.use(express.json());


app.get('/', async(req: Request , res: Response) => {
    return res.json(`Hello ${USERNAME_MIN}`);
})
const PORT = 5000;



app.listen(PORT, () => {
    console.log(USERNAME_MIN)
    console.log(`Listening at port ${PORT}`);
})  

export default app;