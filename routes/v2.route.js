import express from 'express';

const v2Router = express.Router();

v2Router.route('/user').get(async (req, res) => {
  // Handle user-related requests for API v2
  res.json({ message: 'User endpoint for API v2' });
});

v2Router.route('/product').get(async (req, res) => {
  // Handle product-related requests for API v2
  res.json({ message: 'Product endpoint for API v2' });
});

export default v2Router;