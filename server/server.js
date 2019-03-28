const path = require('path')
const express = require('express')
const server = express()
const cors = require('cors')

// const home = require('./routes/home')

server.use(cors())
server.use(express.json())
server.use(express.static(path.join(__dirname, '../client/built')))



server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/built/index.html'))
})

module.exports = server