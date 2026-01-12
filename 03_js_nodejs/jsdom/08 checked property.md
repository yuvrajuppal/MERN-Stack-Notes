```html
<!-- index.html -->
<input type="checkbox" id="subscribed">subsscribe to goosecodes<br />
<input type="radio" name="gender" value="male" id="male">male
<input type="radio" name="gender" value="female" id="female">female <br />
<button id="submit">submit</button>
<script src="./index.js"></script>
```


```js
//index.js
let checkbox = document.getElementById("subscribed");
let radio = document.getElementById("male");
let radio2 = document.getElementById("female");9

document.getElementById("submit").onclick = () => {
	if (checkbox.checked) {
		console.log("subscribed");
	} else {
		console.log("not subscribed");
	}
	if (radio.checked) {
		console.log("male");
	}
	else if (radio2.checked) {
		console.log("female");
	}
}
```