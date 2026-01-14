```
1. if
2. if else
3. if else if else ifelse if ----lader else
4. Ternary operator
5. switch() 
```




```txt
1. if
--Use if (condition) { /* code block */ }` to run code inside the block if the condition is truthy.
```


```js

let a="";
if(a){ // a will be typecast here to bool
console.log ("a has a value");
}

b=10
if(b<11){
console.log("yes b is smaller than 10");
}
```


```
2. if else
--Pair it with `else` to handle false cases: if (condition) { /* true code */ } else { /* false code */ }. This executes the else block if the if condition fails
```


```js
let age = 18
if(age>=18){
	console.log("you are eligible for vote")
}
else{
	console.log("you are not eligible for vote")
}
```

```
3. if else-if ------lader----  else
--Extend with `else if` for multiple conditions: if () {} else if () {} else {}. JavaScript checks conditions sequentially, stopping at the first true one
```


```js
let num = 0
if(num>0){
	console.log('positive');
}
else if(num==0){
	console.log("zero");
}
else{
	console.log("positive");
}
```

```
4. Ternary operator
--it follows the format `condition ? expressionIfTrue : expressionIfFalse`, where the condition is evaluated first. If truthy, it returns the value after the `?`; if falsy, it returns the value after the `:`. This operator always produces a value that can be assigned to a variable

syntax

condition ? true : false

```

```js
let age = 18
let result = age>=18?'you are eligible for vote':'you are not eligible for vote'
console.log(result);
```

```
5. switch
switch can de a efficient replace ment of 
if else-if ------lader----  else
statement 
```

```js
let daynumber = 5
switch (daynumber) {
	case 5:
	case 1: {
		console.log("today is monday");
	} break;
	case 2:{ 
		console.log("today is tuesday");
	} break;
	case 3: {
		console.log("today is wednusday");
	} break;
	default: {
		console.log("u enter in valid number");
	}
}
```
