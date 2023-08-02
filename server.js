const { response } = require('express')
const express = require('express')
const { request } = require('http')
const app = express()
const PORT = 8000

const savage = {
    'age': 29,
    'birthname': 'Sheyaa Bin Abraham-Joseph',
    'birthLocation': 'London, UK'
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api',(request,response)=>{
    response.json()
})

app.listen(PORT, () => {
    console.log(`The server is running on ${PORT} get it!`)
})