import React, { useState } from "react";
import Main from "./Main";
import "./App.css";
import HowTo from "./HowTo";

function App() {
	return (
		<div className="App">
			<div className="App-header">
				<p className="title">
					CO<sub>2</sub> Tracker
				</p>
				<Popup />
			</div>
			<div className="body">
				<Main />
			</div>
		</div>
	);
}

function Popup() {
	const [collapsed, toggle] = useState(0);
	if (collapsed) {
		return (
			<div id="overlay">
				<div className="alignRight">
					<button
						onClick={() => {
							toggle(!collapsed);
						}}
					>
						&times;
					</button>
				</div>
				<div className="tutorial">
					<HowTo />
				</div>
			</div>
		);
	} else {
		return (
			<div>
				<div className="alignRight">
					<button
						onClick={() => {
							toggle(!collapsed);
						}}
					>
						Open Tutorial
					</button>
				</div>
			</div>
		);
	}
}

export default App;
