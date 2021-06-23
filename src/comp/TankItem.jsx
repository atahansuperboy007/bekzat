import { Link } from "react-router-dom"

function TankItem(props) {

  return (
    <Link to={"/tank/" + props.data.id} className="tank-item">
      <img className="tank-img" src={props.data.poster_path} />
      <h1>{props.data.title}</h1>
    </Link>
  );
}

export default TankItem;
