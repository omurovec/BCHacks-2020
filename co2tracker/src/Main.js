import React, { useState } from "react";
import { Chart } from "react-charts";
import  Dropdown  from "./Dropdown.js";

export default function Main(props) {
	// const data = [
	// 	{
	// 		label: "test",
	// 		data: [
	// 			{
	// 				x: 1,
	// 				y: 1
	// 			},
	// 			{
	// 				x: 2,
	// 				y: 3
	// 			}
	// 		]
	// 	}
	// ];

	const axes = [
		{ primary: true, type: "linear", position: "bottom" },
		{ type: "linear", position: "left" }
	];

	const [file, setFile] = useState(0);
	const [loading, setLoading] = useState(1);
	const [data, setData] = useState(2);

	const parseData = () => {
		if (file != null) {
			setLoading(true);
		}
	};

	if (data !== 2) {
		return (
			<div
				className="body"
				style={{
					width: "400px",
					height: "300px"
				}}
			>
				<Chart data={data} axes={axes} />
			</div>
		);
	} else if (loading !== 1) {
		return <div className="body">Loading...</div>;
	}
	{
		return (
			<Upload
				file={file}
				parseData={parseData}
				setFile={setFile}
			/>
		);
	}
}

function Upload(props) {
	if (props.file) {
		return (
			<div className="upload-container">
				<img
					className="upload-image"
					src={require("./Assets/check.svg")}
				/>
				<button
					className="process-button"
					disabled={!props.file}
					onClick={() => {
						if (props.file) {
							props.parseData();
						} else {
							alert("ERROR: No File Uploaded");
						}
					}}
				>
					Show Me My Emissions!
				</button>
			</div>
		);
	} else {
		return (
			<div className="upload-container">
				<label for="file-upload" className="input-label">
					<img
						className="upload-image"
						src={require("./Assets/upload.svg")}
					/>
					Click here to upload your Google location data
					from this year. See top right for help.
				</label>
				<input
					id="file-upload"
					type="file"
					name="file"
					onChange={event => {
						props.setFile(event.target.files[0]);
					}}
				></input>
				<Dropdown />
			</div>
		);
	}
}
