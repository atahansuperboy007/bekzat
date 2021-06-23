import TankItem from "./TankItem"
import Tanks from "../tanks.json"

function TankList(props) {
  
  return (
    <div className="tank-list">
      {Tanks.filter(tank => {
           if (props.text == "") {
           return tank
          } else if (tank.title.toLowerCase().includes(props.text.toLowerCase())) {
            return tank 
          }
        }).map((tank) => (
        <TankItem data={tank} />
      ))}
    </div>
  );
}

export default TankList;
