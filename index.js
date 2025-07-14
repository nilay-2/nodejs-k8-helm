import express from 'express'
import v1Router from './routes/v1.route'
import v2Router from './routes/v2.route'
const app = express()

app.use('/api/v1', v1Router)
app.use('/api/v2', v2Router)

app.listen(5000, () => {
  console.log('Server is running on port 5000, hahahaha')
})