import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import httpStatus from 'http-status';
import { ApplicationRoutes } from './app/routes';
const app: Application = express();

// middlewares
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to help-desk-by-developers-server',
  });
});

// application routes || apis
app.use('/api/v1', ApplicationRoutes);
// handl not found route
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'NOT FOUND!',
    errorMessage: [
      {
        path: req.originalUrl,
        message: 'Api not found!!',
      },
    ],
  });

  next();
});
export default app;
