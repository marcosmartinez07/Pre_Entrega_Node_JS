import createError from 'http-errors'; 
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url'; 
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import ProductsRouter from './routes/product.routes.js';
import authentication from './middlewares/authentication.js';
import authRouter from './routes/auth.routes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middlewares estándar
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/auth', authRouter);
app.use('/', authentication, ProductsRouter); 


app.use(function(req, res, next) {
  next(createError(404, "La ruta solicitada no existe"));
});


app.use(function(err, req, res, next) {
  const message = err.message;
  const errorDetails = req.app.get('env') === 'development' ? err : {};

  console.error("❌ ERROR DETECTADO EN EL SERVIDOR:", err);

  res.status(err.status || 500);
  res.json({
    status: 'error',
    message: message,
    details: errorDetails.stack ? err.stack.split('\n') : errorDetails
  });
});

export default app;