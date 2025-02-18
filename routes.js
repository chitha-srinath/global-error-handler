import { Router } from 'express';
import { NotFoundError, ValidationError } from './Configurations/error.js';
import logger from './logger.js';

const router = Router();

router.get('/users', (req, res, next) => {
  try {
    const error = true;
    if (error) {
      throw new Error('This is a test error');
      // return next(new NotFoundError("This is a test error"));
    }
    res.status(201).json([{ id: '1', name: 'John Doe' }]);
  } catch (err) {
    logger.error('there is an error in users method', err);
    return next(err);
  }
});

router.get('/getusers', (req, res, next) => {
  res.json([{ id: '2', name: 'srinath Doe' }]);
});

router.post('/postUser', (req, res, next) => {
  try {
    let { id, name } = req?.body;
    res.json([{ id, name }]);
  } catch (err) {
    logger.error('there is an error in postUser method', err);
    return next(err);
  }
});

export default router;
