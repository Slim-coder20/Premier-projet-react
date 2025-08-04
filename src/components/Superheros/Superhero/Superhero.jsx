import classes from "./Superhero.module.css";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

export default function Superhero({
  nom,
  description = "Pas de descriptioon pour l'instant",
  films = ["Aucun film pour super hero"],
  image = "https://media.istockphoto.com/id/2171382633/fr/vectoriel/ic%C3%B4ne-de-profil-utilisateur-symbole-de-personne-anonyme-graphique-davatar-vierge.jpg?s=612x612&w=0&k=20&c=xc5c3QmH-iTo7EbRzADsYTAWV4-H6ghiA17qOv1kmao=",
  details = "Aucun nouveau détails",
  isFavoriteHero,
  superheroClicked = () => {},
  ...props
}) {
  console.log(props);
  // Un composant ne s'execute qu'une seule fois : au début -> et ensuite à chaque
  // modification "Fonctionnelle" pour cela on utilisera un "State"
  /* 
    React hook règles : 
    - Toujours appler les React Hooks seulement dans un composant fonctionnel (pas au-dessus)
    - Tout le temps appler les React Hooks avant le reste du code 
  
  */
  // States
  const [showDetails, setShowDetails] = useState(false);
  const [afficherModale, setAfficherModale] = useState(false);

  // Fonction

  const nomClique = (evenement) => {
    evenement.stopPropagation();
    setAfficherModale(true);
  };

  useEffect( () =>  {
    if(afficherModale) {
      document.body.style.overflow = "hidden"; 
    } else {
      document.body.style.averflow = "unset"; 
    }
  },[afficherModale])

  return (
    <div
      className={`${classes.superhero} ${isFavoriteHero && classes.isFavoriteHero}`}
      onClick={() => superheroClicked(nom)}
      style={{ position: "relative" }}
    >
      {/* Utilisation de la Modale  */}
      {afficherModale &&
        createPortal(
          <div
            style={{
              background: "rgba(0, 0, 0, 0.9)",
              position: "absolute",
              bottom: 0,
              right: 0,
              top: 0,
              left: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={(evenement) => {
              evenement.stopPropagation();
              setAfficherModale(false);
            }}
          >
            <div style={{ padding: 30, background: "white" }}>
              <b>Informations</b>
              <ul>
                <li>Taille : 1,85</li>
                <li>Couleur des cheveux : Noirs</li>
                <li>Couleur des yeux : Bleus</li>
              </ul>
            </div>
          </div>,
          document.querySelector("body")
        )}
      {/* Carte  */}
      <img src={image} alt={`${nom} image`} />
      <h2 onClick={(evenement) => nomClique(evenement)} className=" text-xl font-bold cursor-pointer">{nom}</h2>

      {/* Description */}
      <p>{description}</p>

      {/* Détails */}
      <div
        className=" text-red-600 cursor-pointer font-bold mb-[10px] hover:text-red-300"
        onClick={(evenement) => {
          evenement.stopPropagation();
          setShowDetails((stateBefor) => !stateBefor);
        }}
      >
        {showDetails ? "Masquer les détails" : " En savoir plus"}
      </div>
      {showDetails && (
        <div
          style={{
            whiteSpace: "pre-line",
            marginTop: "20px",
          }}
        >
          {details}
        </div>
      )}

      {/* Films */}
      <div style={{ marginTop: 10 }}>
        <h2>Films :</h2>
        <ul>
          {films.map((film) => (
            <li key={film}>{film}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
