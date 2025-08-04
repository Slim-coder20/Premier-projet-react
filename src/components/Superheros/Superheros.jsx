import Superhero from "./Superhero/Superhero";
import "./Superheros.css";

export default function Superheros(props) {
  console.log(props);
  return (
    <>
      <h2 className="text">Le top 3 des superheros</h2>
      <div className="superheros">{props.children}</div>
    </>
  );
}
