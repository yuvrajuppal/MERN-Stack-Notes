```
make a routes folder
and make a user.route.js file

routes/user.route.js
```

```js
//user.route.js
import express from 'express';
const router = express.Router();

router.route('/user').get((req, res) => {
	res.status(200).json({
	success: true,
	message: "User Route"
	})
})
export default router;
```


integrate it to app.js
```js
import express from "express";
import userRoute from "./routes/user.route.js";
  
const app = express();
  
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

  
app.use(
	cors(
		{
			origin: (origin, callback) => {
			if (!origin) {
				return callback(null, true)
			}
			return callback(null, origin)
		},
			credentials: true,
		}
	)
)
  
app.use("/api", userRoute);
  
export default app;
```


