import Express, { Request, Response } from 'express';
import indexRoute from './routes';

// Initiate express
const app = Express();
app.use(Express.json());

app.use(indexRoute);


const port = process.env.PORT || 3000;



// Setup “hello world” endpoint
//Use middleware for catch-all
// app.use((req: Request, res: Response) => {
//     res.send('Hello World!');
// });


// Start the express server on the relevant port
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});