

```
first name a file .htaccess
```
```
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]                    # Allow direct access to index.html
RewriteCond %{REQUEST_FILENAME} !-f               # If requested resource is not a file
RewriteCond %{REQUEST_FILENAME} !-d               # And is not a directory
RewriteRule . /index.html [L]                      # Redirect all requests to index.html

```


```jsx
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
server: {
host: '0.0.0.0'
},
plugins: [react(),tailwindcss()],
})
```
