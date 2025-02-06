import axios from "axios";
import React, { useState } from "react";

const HeroForm = ({ getHeroes }) => {
  const [name, setName] = useState("");
  const [superpower, setSuperpower] = useState("");
  const [humility_score, setHumilityScore] = useState("");
  const [error, setError] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:8000/api/v1/superheroes",
        {
          name,
          superpower,
          humility_score: parseFloat(humility_score),
        }
      );
      getHeroes();
      setName("");
      setSuperpower("");
      setHumilityScore("");
    } catch (error) {
      console.log(error.response.data.message);
      setError(error.response.data.message);
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="container d-flex flex-column gap-3"
      style={{ maxWidth: "800px" }}
    >
      <label htmlFor="name" className="fw-bold fs-5">
        Name of Superhero:
      </label>
      <input
        className="form-control"
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="power" className="fw-bold fs-5">
        Superpower:
      </label>
      <input
        className="form-control"
        type="text"
        id="power"
        value={superpower}
        onChange={(e) => setSuperpower(e.target.value)}
      />
      <label htmlFor="humility" className="fw-bold fs-5">
        Humility Score:
      </label>
      <input
        className="form-control"
        type="number"
        id="humility"
        value={humility_score}
        onChange={(e) => setHumilityScore(e.target.value)}
      />
      <button type="submit" className="btn btn-success align-self-end">
        Submit
      </button>
      {error && <p className="text-center text-danger fs-3 mt-2">{error}</p>}
    </form>
  );
};

export default HeroForm;
