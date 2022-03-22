const express = require('express')

const app = express()

const port = 1414

const connection = require('./config/db')
connection.once('open', () => console.log('DB Connected'))
connection.on('error', () => console.log('Error'))

app.use(express.json())

app.use('/api/url', require('./routes/url'))
app.use('/', require('./routes/redirect'))

app.listen(port, () => 
  console.log('Working')
)