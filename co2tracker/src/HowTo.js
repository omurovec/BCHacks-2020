import React, { Component } from "react";

function HowTo() {
	return (
		<div className="how-to">
			<ol>
				<li>
					<p>
						Follow this{" "}
						<a href="https://takeout.google.com/settings/takeout">
							link
						</a>{" "}
						to download your data.
					</p>
				</li>
				<li>
					<p>
						Scroll down until you find "Location History"
						and ake sure there is a check mark next to
						Location History
					</p>
				</li>
				<img
					src={require("./Assets/LocationHistory.png")}
				></img>{" "}
				<li>
					<p>
						Scroll to the bottom of the page and select
						"Next Step"
					</p>
				</li>
				<img src={require("./Assets/next-step.png")}></img>{" "}
				<li>
					<p>Fill out the form as shown below:</p>
				</li>
				<img
					src={require("./Assets/export-settings.png")}
				></img>{" "}
				<li>
					<p>Check your email for the download link</p>
				</li>
				<li>
					<p>
						Upload the latest year of data to the main page
						<br />
						<span>
							(found in Takeout\Location History\Semantic
							Location History\[LATEST_YEAR])
						</span>{" "}
					</p>
				</li>
			</ol>
		</div>
	);
}

export default HowTo;
