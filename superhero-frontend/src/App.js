import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import HeroForm from "./Components/HeroForm";
import HeroList from "./Components/HeroList";

function App() {
  const [heroes, setHeroes] = useState([]);
  const [error, setError] = useState();

  const getHeroes = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/v1/superheroes"
      );
      setHeroes(response.data.data.heroes);
    } catch (error) {
      setError(error);
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  };

  useEffect(() => {
    getHeroes();
  }, []);

  return (
    <div>
      <h1 className="text-center my-5 text-danger ">Humble Superheroes</h1>
      <HeroForm getHeroes={getHeroes} />
      {error && <p className="text-center text-danger fs-3 mt-2">{error}</p>}
      <HeroList heroes={heroes} />
    </div>
  );
}

export default App;
