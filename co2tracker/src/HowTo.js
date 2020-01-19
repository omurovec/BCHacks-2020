import React, { Component } from "react";

function HowTo() {
  return (
    <React.Fragment>
      <ol>
        <a href="https://takeout.google.com/settings/takeout">
          <li>
            <p>Go to this site</p>
          </li>
        </a>
        <li>
          <p>Scroll down until you find "Location History"</p>
        </li>
        <img src="./Assets/LocationHistory.png"></img>
        <li>
          <p>Make sure there is a check mark next to Location History</p>
        </li>
        <li>Scroll to the bottom of the page and select "Next Step"</li>
        <li>Fill out your desired delivery method</li>
        <li>Locate your file through your delivery methodx</li>
        <li>Upload file to Website.</li>
      </ol>
    </React.Fragment>
  );
}

export default HowTo;
