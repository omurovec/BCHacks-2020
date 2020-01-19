import React, { useState } from "react";
import Main from "./Main";
import "./App.css";

function App() {
	return (
		
		<div className="App">
			<div className="App-header">
				<p className="title">
					CO<sub>2</sub> Tracker
				</p>
				<Popup/>
				
			</div>
			<div className="body">
				<Main />
			</div>
		</div>
	);
}

function Popup(){
	const [collapsed, toggle] = useState(0)
	if(collapsed) {
		return(
			<div id="overlay">
				<div class="alignRight">
					<button onClick={() => {toggle(!collapsed)}} >&times;</button>
				</div>
				<div class="tutorial">
					<p>Hello World</p>
				</div>
			</div>
		);
	} else {
		return(
			<div>
				<div class="alignRight">
					<button onClick={() => {toggle(!collapsed)}} >Open Tutorial</button>
				</div>
			</div>
		);
	}
}

export default App;
