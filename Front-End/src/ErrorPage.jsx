import React from "react";
import background  from "./test2.jpg";

import { Link } from "react-router-dom";
function ErrorPage() {
  return (
    <div className="text-center mt-10">
      <div style={{ backgroundImage: `url(${background})` }}>
      <h1>404 Page Not Found</h1>
      <Link to="/">
        <button className="btn btn-primary-outline">Back to Home page</button>
      </Link>{" "}
    </div>
    </div>
  );
}

export default ErrorPage;