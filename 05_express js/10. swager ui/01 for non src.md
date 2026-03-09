```
npm i swagger-autogen swagger-ui-express chalk
```


swagger.js
```js
import swaggerAutogen from 'swagger-autogen'
import { formatSwaggerJson } from './swaggerjsonformater.js'
const doc = {
    openapi: '3.0.0', // Force 3.0 only
    info: { title: 'Nhitedu API', version: '1.0.0' },
    servers: [{ url: 'http://localhost:3000' }]
}
const outputFile = './swagger-output.json'
const endpointsFiles = ['./app.js'] // Include app.js for full route tree with prefix
let result = await swaggerAutogen({ openapi: '3.0.0' })(outputFile, endpointsFiles, doc)
console.log('Pure OpenAPI 3.0 generated!')
if (result.success) {
    formatSwaggerJson();
}
```

swaggerjsonformater.js

```js
import fs from 'fs/promises';
import chalk from 'chalk';
export const formatSwaggerJson = async () => {
    try {
        const swaggerJson = await fs.readFile('./swagger-output.json', 'utf-8');
        const data = JSON.parse(swaggerJson);
        Object.keys(data.paths).forEach((route) => {
            let tempdata = route
            let index = Object.keys(data.paths[route])[0]
            data.paths[route][index]["tags"] = [tempdata.slice(1, tempdata.slice(1).indexOf('/') + 1)]
        })
        await fs.writeFile("./swagger-output.json", JSON.stringify(data, null, 2), 'utf8')
        console.log(chalk.yellow('Swagger json formatted'));
    } catch (err) {
        console.log('error came');
        console.log(err.message);
    }
};
```




app.js
```js

import swaggerUi from 'swagger-ui-express'
import fs from 'fs';


const swaggerData = JSON.parse(fs.readFileSync('./swagger-output.json', 'utf-8'));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerData));





```

```json
    "dev": "nodemon --ignore swagger-output.json --exec \"node swagger.js && node server.js\""
```

