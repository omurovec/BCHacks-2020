import React, { useState, useEffect } from "react";
import functionHandler from "./functions";

export default function Dropdown(props) {
	const [year, setYear] = useState(0);
	const [make, setMake] = useState(1);
	const [co2, setCo2] = useState(2);
	const [YEARS, setYEARS] = useState(3);
	const [MAKES, setMAKES] = useState(4);
	const [MODELS, setMODELS] = useState(5);

	useEffect(() => {
		if (YEARS === 3) {
			functionHandler("getYear").then(resp => {
				setYEARS(resp);
			});
		}
	});

	return (
		<div>
			<select
				name="Year"
				id="year"
				onChange={() => {
					const year = document.getElementById("year")
						.value;
					setYear(year);
					functionHandler("getMake", {
						year: year
					}).then(makes => {
						setMAKES(makes);
					});
				}}
			>
				<List
					data={YEARS}
					default={3}
					message1="Currently fetching years..."
					message2="Error fetching years, please try again."
				/>
			</select>
			<select
				name="Make"
				id="make"
				onChange={() => {
					const make = document.getElementById("make")
						.value;
					functionHandler("getModel", {
						year: year,
						make: make
					}).then(models => {
						setMODELS(models);
					});
				}}
			>
				<List
					data={MAKES}
					default={4}
					message1="Enter year first"
					message2="No supported makes in this year."
				/>
			</select>
			<select
				name="Model"
				id="model"
				onChange={() => {
					functionHandler("getCO2", {
						year: year,
						make: make,
						model: document.getElementById("model").value
					}).then(co2 => {
						setCo2(co2);
					});
				}}
			>
				<List
					data={MODELS}
					default={5}
					message1="Enter year and make first."
					message2="No supported models for this year and make."
				/>
			</select>
		</div>
	);
}

function List(props) {
	if (props.data.length > 0) {
		return props.data.map(element => {
			return (
				<option key={element} value={element}>
					{element}
				</option>
			);
		});
	} else if (props.data === props.default) {
		return (
			<option value="null" disabled>
				{props.message1}
			</option>
		);
	} else {
		return (
			<option value="null" disabled>
				{props.message2}
			</option>
		);
	}
}
