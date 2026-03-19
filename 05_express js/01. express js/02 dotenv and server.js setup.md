
```
npm i dotenv
```

## then create a .env file
![[Screenshot 2026-03-18 at 11.46.16 AM.png]]

add this to the `.env` file
```env
SERVERPORT = 3000
```

server.js
```js
import 'dotenv/config';
// this should be at the top other wize it will not work
// now create a .env file in the root dir
import app from "./app.js";




app.get('/',(req,res)=>{
res.send("server Started")
})

  
const ServerPort = process.env.SERVERPORT
  
app.listen(ServerPort,()=>{
console.log(`server started at ${ServerPort}`);
});
```

## then do `npm run dev`


![[Screenshot 2026-03-18 at 11.47.42 AM.png]]