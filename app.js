const express = require('express')
const path = require('path')

const app = express();

app.use(express.static(path.join(__dirname, 'client', 'build')))

app.get('*', (req, res) => {

})

const port = process.env.PORT | 3000
app.listen(post)
