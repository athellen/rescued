import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer d-flex justify-content-around">
      <div>
        <p>
          <u>Contact Us On </u>
          <br />
          <i className="fa fa-envelope" aria-hidden="true"></i>
          *111#
          <br />
          <i class="fa fa-phone" aria-hidden="true"></i>
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
