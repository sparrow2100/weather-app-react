import React from "react";

export default function Header(props) {
  return (
    <header>
      <br />

      <h1 className="city">{props.temporaryCity}</h1>
      <br />
      <div className="currentLocation">
        <button className="location">Current Location</button>
      </div>
    </header>
  );
}
