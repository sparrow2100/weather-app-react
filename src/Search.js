import React from "react";

export default function Search() {
  return (
    <div className="search col-5">
      <form>
        <input name="city" placeholder="🔎 Search" />
        <input type="submit" id="submit" />
      </form>
    </div>
  );
}
