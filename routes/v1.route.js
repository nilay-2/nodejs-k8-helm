import express from 'express';

const v1Router = express.Router();

v1Router.route('/user').get(async (req, res) => {
  // Handle user-related requests for API v1
  res.json({ message: 'User endpoint for API v1' });
});

v1Router.route('/product').get(async (req, res) => {
  // Handle product-related requests for API v1
  res.json({ message: 'Product endpoint for API v1' });
});

export default v1Router;