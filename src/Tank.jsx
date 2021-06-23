import { Link, useParams } from "react-router-dom";
import tanks from "./tanks.json";

function Movie() {
  const { id } = useParams();

  return (
    <div className="tank">
      {tanks.map((tank) => {
        if (tank.id == id) {
        return (
          <div>
            <h1>{tank.title}</h1>
            <br/>
            <img src={tank.poster_path} />
            <div className="tank-text">
              <div className="overview">
                <p>{tank.overview}</p>
              </div>
            </div>
          </div>
          );
        }
      })}
    </div>
  );
}

export default Movie;