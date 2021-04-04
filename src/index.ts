import express from 'express';
import indexRoutes from './routes/index.route';

const app =  express();
// MIDDLEWARES
app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.use(indexRoutes);

app.listen(4000);
console.log('Running on port', 4000);