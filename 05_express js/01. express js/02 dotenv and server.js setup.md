
```
npm i dotenv
```

server.js
```js
import app from "./app.js";
import './config/connectdb.js'
import dotenv from 'dotenv'

dotenv.config({path:'./config/config.env'});

app.get('/',(req,res)=>{
res.send("server Started")
})

  
const ServerPort = process.env.SERVERPORT
  
app.listen(ServerPort,()=>{
console.log(`server started at ${ServerPort}`);
});
```
