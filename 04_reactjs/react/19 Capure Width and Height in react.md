```jsx
import React, { useEffect, useState } from 'react'
function App() {
	const [width,set_width] = useState(window.innerWidth)
	const [height,set_height] = useState(window.innerHeight)
	useEffect(() => {
		console.log("change in with");
		window.addEventListener("resize",handleresize)
	}, [width,height])
	const handleresize = ()=>{
		set_width(window.innerWidth)
		set_height(window.innerHeight)
	}
	return (
		<div className='flex flex-col'>
		<div>width : {width}</div>
		<div>height : {height}</div>
		</div>
	)
}

  

export default App
```