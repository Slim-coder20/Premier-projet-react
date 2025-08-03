import Superhero from "./Superhero/Superhero";
import "./Superheros.css"; 

export default function Superheros(props) {
  console.log(props)
  return (
    <div className="superheros">
        {props.children}
    </div>
  );
}
