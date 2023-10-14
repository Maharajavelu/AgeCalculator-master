import React, { useState } from "react";
import './Home.css'
function Home({ onDateOfBirthChange }) {
  const [dateOfBirth, setDateOfBirth] = useState("");

  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    setDateOfBirth(selectedDate);
    console.log(selectedDate);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("User's date of birth is:", dateOfBirth);
    onDateOfBirthChange(dateOfBirth);
  };

  return (
    <>
    <div className="main">
    <h1 className="textcenter">Age Genius <br />
      <span>"Track the Chapters of Your Life with Precision."</span>
      </h1>

      <div className="Container">
        <form className="Form" onSubmit={handleSubmit}>
          <label htmlFor="dob">Select your birth date</label>
          <input
            type="date"
            name="dob"
            id="dob"
            className="dob"
            value={dateOfBirth}
            onChange={handleDateChange}
          ></input>
          <button type="submit" name="Submit" className="submit">
          "How Old Am I?"
          </button>
        </form>
      </div>
    </div>
     
    </>
  );
}

export default Home;
