import React from "react";

export default function Header() {
  return (
    <header>
      <br />

      <h1 className="city">MISSISSAUGA, ON</h1>
      <br />
      <div className="currentLocation">
        <button className="location">Current Location</button>
      </div>
    </header>
  );
}
