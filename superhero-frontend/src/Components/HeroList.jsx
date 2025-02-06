import React from "react";

const HeroList = ({ heroes, setEditingHero, deleteHero }) => {
  return (
    <div className="container">
      <ul className="superheroes d-flex justify-content-center align-items-center my-5 gap-5 flex-wrap">
        {heroes.map((hero, index) => (
          <li
            key={index}
            className="card p-4 bg-warning"
            style={{ minWidth: "230px" }}
          >
            <h2 className="text-center">{hero.name}</h2>
            <p>
              <b>
                <i>Superpower: </i>
              </b>
              {hero.superpower}
            </p>
            <p>
              <b>
                <i>Humility Score: </i>
              </b>
              {hero.humility_score}
            </p>
            <div className="d-flex justify-content-center">
              <button
                className="btn btn-success me-2 w-50"
                onClick={() => setEditingHero(hero)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger w-50"
                onClick={() => deleteHero(hero.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HeroList;
