import React from "react";

export default function Dropdown(props) {
	var years = ["2002", "2005", "3006"];
	var make = ["Toyota", "Mazda", "Kia"];
	var model = ["3", "5", "7"];
    return <div>
        <select name="Year">
            {
                years.map(element => {
                    return <option value={element}>{element}</option>
                })
            }
        </select>
		<select name="Make">
            {
                make.map(element => {
                    return <option value={element}>{element}</option>
                })
            }
        </select>
		<select name="Model">
            {
                model.map(element => {
                    return <option value={element}>{element}</option>
                })
            }
        </select>
    </div>;
}
