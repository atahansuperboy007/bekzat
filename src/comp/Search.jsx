import { useState, useEffect } from "react";
import TankItem from "./TankItem";
import { useParams } from "react-router-dom";

function Search(props) {
  const { q } = useParams();

  const [tanks, setMovies] = useState([]);

  useEffect(() => {
    fetch("" + q + "")
      .then((res) => res.json())
      .then((data) => {
      setMovies(data.results);
      });
  }, [q]);

  return (
    <div className="tank-list">
      {   
        tanks.filter(tank => {
           if (props.search == "") {
           return tank
          } else if (tank.title.toLowerCase().includes(props.search)) {
            return tank 
          }
        }).map(tank => (
          <TankItem data={tank} />
        ))
      }
    </div>
  );
}

export default Search;
