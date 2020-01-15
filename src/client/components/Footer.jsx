import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <div>
        <p>
          <u>Contact Us On </u>
          <br />
          <i
            className="fas fa-envelope-open-text"
            style={{ color: "blue" }}
          ></i>{" "}
          *111#
          <br />
          <i className="fas fa-phone-alt"></i>
          111
        </p>
      </div>
      <div>
        <p> Click the link below to get notifications </p>
        <Link to="/registration"> Register </Link>
      </div>
    </div>
  );
}
