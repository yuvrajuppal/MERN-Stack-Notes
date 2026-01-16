```
npm i swagger-autogen swagger-ui-express
```


server.js
```js
import swaggerAutogen from 'swagger-autogen'

const doc = {
openapi: '3.0.0', // Force 3.0 only
info: { title: 'GooseCodesSMP API', version: '1.0.0' },
servers: [{ url: 'http://localhost:3000' }]
}

const outputFile = './swagger-output.json'
const endpointsFiles = ['./app.js'] // Include app.js for full route tree with prefix

// await swaggerAutogen()(outputFile, endpointsFiles, doc)

await swaggerAutogen({ openapi: '3.0.0' })(outputFile, endpointsFiles, doc)
console.log('Pure OpenAPI 3.0 generated!')
```

app.js
```js
import express from 'express'
import swaggerUi from 'swagger-ui-express'
import fs from 'fs';
const app = express();

const swaggerData = JSON.parse(fs.readFileSync('./swagger-output.json', 'utf-8'));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerData));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

import userrouter from './routes/user.route.js'
app.use('/v1/api', userrouter)

export default app
```

```json
"dev": "nodemon --ignore swagger-output.json --exec \"node swagger.js && node server.js\""
```

