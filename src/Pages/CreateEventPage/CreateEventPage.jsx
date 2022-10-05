import React from "react";
import { Link } from "react-router-dom";

const CreateEventPage = () => {
  return (
    <div>
      <form action="">
        <label htmlFor="">Event name:</label>
        <input type="text" maxlength="35" minlength="4" />

        <label htmlFor="">Host name:</label>
        <input type="text" maxlength="35" minlength="4" />

        <label htmlFor="">Start date:</label>
        <input type="datetime" name="" id="" />
        <label htmlFor="">End date:</label>
        <input type="datetime" name="" id="" />

        <Link to="/eventpage">
          <p className="p2"> Next</p>
        </Link>
      </form>
    </div>
  );
};

export default CreateEventPage;
