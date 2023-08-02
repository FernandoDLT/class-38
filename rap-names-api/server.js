const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
   'tupac':{
      'age': 53,
      'birthName': 'Tupac Shakur',
      'birthLocation': 'New York, NY'
   },
   'biggie smalls':{
      'age':48,
      'birthName': 'Christoper George Latore Wallace',
      'birthLocation': 'New York, NY'
   },
   'eminem':{
      'age': 43,
      'birthName': 'Marshal Mathers',
      'birthLocation': 'Detroit, Michigan'
   },
   'dylan':{
      'age': 'Unknown',
      'birthName': 'Dylan',
      'birthLocation': 'Dylan'
   }
}

app.get('/', (request,response) => {
   response.sendFile(__dirname + '/index.html')
})

app.get('/api/:rapperName', (request, response) => {
   const rapperName = request.params.rapperName.toLowerCase()
   if(rappers[rapperName]) {
      response.json(rappers[rapperName])
   } else {
      response.json(rappers['dylan'])
   }
})

app.listen(PORT, () => {
   console.log(`This server is running on port ${PORT}! You better catch it!`)
})