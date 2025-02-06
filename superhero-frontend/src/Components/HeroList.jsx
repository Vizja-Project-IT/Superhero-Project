import React from "react";

const HeroList = ({ heroes }) => {
  return (
    <div className="container">
      <ul className="superheroes d-flex justify-content-center align-items-center my-5 gap-5 flex-wrap">
        {heroes.map((hero, index) => (
          <li key={index} className="card p-4  bg-warning">
            <h2 className="text-center">{hero.name}</h2>
            <p>
              <b>
                <i>Superpower:</i>
              </b>
              {hero.superpower}
            </p>
            <p>
              <b>
                <i>Humility Score:</i>
              </b>
              {hero.humility_score}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HeroList;
