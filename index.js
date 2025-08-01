  import express from 'express'
  import v1Router from './routes/v1.route'
  import v2Router from './routes/v2.route'
  const app = express()

  process.on('unhandledRejection', (err) => {
    console.error('Unhandled Rejection:', err);
  });

  process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
  });

  app.get('/', (req, res) => {
    res.status(200).json({message: "Successful healthcheck"})
  })
  app.use('/api/v1', v1Router)
  app.use('/api/v2', v2Router)


  app.listen(5000,'0.0.0.0', () => {
    console.log('Server is running on port 5000, hahahaha, welcome to helm charts last updated - 21 july 2025')
  })