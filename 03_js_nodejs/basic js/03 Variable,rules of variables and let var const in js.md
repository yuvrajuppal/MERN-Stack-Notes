
let,var,const are keywords that are uses to declare variables 
```js
let name = "yuvraj"
var email = "yuvraj@gmail.com"
const number = 1234567890
```

you cannot assign new value to const 
```js
const number = 1234567890
number = 7890 // error will come 
```

in let and var  u can re assign the value to the variable
```js
let number = 1234567890
number = 7890 // error will not come 
```

```js
var number = 1234567890
number = 7890 // error will not come 
```

right now don't use var 
use let and const only


## variable Rules
- Must begin with a letter (a-z, A-Z), underscore (_), or dollar sign ($).
- Can include letters, digits (0-9), underscores, or dollar signs afterward.
- Case-sensitive: `myVar` differs from `MyVar`.
- Cannot use reserved keywords like `let`, `const`, `var`, `function`, `if`, `class`.
- use let, var, const, to declare a variable
