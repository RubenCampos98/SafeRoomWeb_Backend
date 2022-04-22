const express = require('express');
const app = express();
const routes = require('./routes/routesSafeRoom')
const cors = require('cors');

//Configurações
app.use(cors())
app.set('port', process.env.PORT|| 3001);

//Middlewares
app.use(express.json());

// Configurar Headers do CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access - Control - Allow - Request - Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
})

//Rotas
/*app.use('/api',(req,res)=>{
res.send("Hello World!");
});*/
app.use('/api', routes)

app.listen(app.get('port'),()=>{
console.log("Start server on port "+app.get('port'))
})