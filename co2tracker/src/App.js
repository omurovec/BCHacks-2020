import React from "react";
import Main from "./Main";
import "./App.css";

function App() {
	return (
		<div className="App">
			<div className="App-header">
				<p className="title">
					CO<sub>2</sub> Tracker
				</p>
			</div>
			<div className="body">
				<Main />
			</div>
		</div>
	);
}

export default App;
