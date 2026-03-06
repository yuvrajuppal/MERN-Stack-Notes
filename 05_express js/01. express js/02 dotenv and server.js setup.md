
```
npm i dotenv
```

server.js
```js
import app from "./app.js";
import 'dotenv/config';

// now create a .env file in the root dir

app.get('/',(req,res)=>{
res.send("server Started")
})

  
const ServerPort = process.env.SERVERPORT
  
app.listen(ServerPort,()=>{
console.log(`server started at ${ServerPort}`);
});
```
