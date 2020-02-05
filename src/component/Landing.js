import React, { useState } from "react";

const Landing = () => {
  const [value, setValue] = useState({
    input: ""
  });
  const [result, setResult] = useState({
    Name: "",
    Alias: ""
  });
  const handleChange = name => event => {
    setValue({ ...value, [name]: event.target.value });
  };
  const { input } = value;
  const { Name, Alias } = result;
  const handleSubmit = event => {
    event.preventDefault();
    const search = interviewCriminals(input);
    setResult({ ...result, Name: search.key, Alias: search.value });
  };

  const interviewCriminals = input => {
    const criminals = new Map();

    criminals.set("Paul White", "Roger Night, Peter Llong Jr.");
    criminals.set("Roger Fedexer", "Rob Ford, Pete Lord, Roger McWire");
    criminals.set("Paul White Jr.", null);
    criminals.set("Red Fortress", "Roger Rabbit, Ross Winter");
    criminals.set("Redford Fort", "Red Strong, Red Fort");
    //We'll consider taking the input into uppercase
    const changedInput = input.toLowerCase();
    if (changedInput) {
      for (const [key, value] of criminals.entries()) {
        if (key.toLowerCase().includes(changedInput)) {
          return { key, value };
        }
      }
      for (const [key, value] of criminals.entries()) {
        if (value) {
          if (value.toLowerCase().includes(changedInput)) {
            return { key, value };
          }
        }
      }
    }
    return `No Match`;
  };

  return (
    <div className="container m-5">
      <form>
        <div className="form-group">
          <label className="text-muted">Enter Name</label>
          <input
            type="text"
            value={input}
            onChange={handleChange("input")}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <button
            type="submit"
            onClick={handleSubmit}
            className="btn btn-primary"
          >
            Search
          </button>
        </div>
      </form>

      {Name ? (
        <div className="card-body">
          <h5 className="card-title">
            <b>Name:</b> {Name}
          </h5>
          <h5 className="card-text">
            <b>Alias: </b>
            <span className="text-right">{Alias}</span>
          </h5>
        </div>
      ) : (
        <h5>No Match</h5>
      )}
    </div>
  );
};

export default Landing;
