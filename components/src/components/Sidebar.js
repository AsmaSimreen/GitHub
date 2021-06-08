import React from "react";
import { Link } from "react-router-dom";
import "./css/Sidebar.css";
export default function Sidebar() {
  return (
    <div className="sideBar">
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>Contact</li>
      </ul>
    </div>
  );
}
