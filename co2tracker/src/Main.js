import React, { useState, useEffect } from "react";
import { Chart } from "react-charts";
import Dropdown from "./Dropdown.js";
import DataParser from "./DataParser";

export default function Main(props) {
	//TODO: format chart
	const formatData = data => {
		return [
			{
				label: "CO2",
				data: data.map((item, index) => ({
					x: index,
					//CO2 CALCULATION
					y: item.distance * co2 * 0.000621371
				}))
			}
		];
	};

	const axes = [
		{ primary: true, type: "linear", position: "bottom" },
		{ type: "linear", position: "left" }
	];

	const [file, setFile] = useState(0);
	const [loading, setLoading] = useState(1);
	const [data, setData] = useState(2);
	const [co2, setCO2] = useState(3);

	const fr = new FileReader();
	fr.onload = e => {
		const file = e.target.result;
		setData(DataParser(JSON.parse(file)));
		setLoading(false);
	};

	const parseData = () => {
		if (file != null) {
			setLoading(true);
			fr.readAsText(file);
		}
	};

	if (data !== 2) {
		return (
			<div
				className="body"
				style={{
					width: "80vw",
					height: "60vh"
				}}
			>
				<Chart data={formatData(data)} axes={axes} />
			</div>
		);
	} else if (loading !== 1) {
		return <div className="body">Loading...</div>;
	}
	{
		return (
			<div className="body">
				<Upload
					file={file}
					parseData={parseData}
					setFile={setFile}
					co2={co2}
				/>
				<Dropdown setCO2={setCO2} />
				<button
					className="process-button"
					disabled={!file || co2 == 3 ? true : false}
					onClick={() => {
						if (file) {
							parseData();
						} else {
							alert("ERROR: No File Uploaded");
						}
					}}
				>
					Show Me My Emissions!
				</button>
			</div>
		);
	}
}

function Upload(props) {
	if (props.file) {
		return (
			<div className="upload-container">
				<div className="input-label">
					<img
						className="upload-image"
						src={require("./Assets/check.svg")}
						style={{ width: "100px" }}
					/>
					<p className="upload-message">
						File uploaded successfully
					</p>
				</div>
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

					<p className="upload-message">
						Click here to upload your Google location data
						from this year. See top right for help.
					</p>
				</label>
				<input
					id="file-upload"
					type="file"
					name="file"
					onChange={event => {
						props.setFile(event.target.files[0]);
					}}
				></input>
			</div>
		);
	}
}
