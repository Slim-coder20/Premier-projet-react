// Importation du fichier App.css
import "./App.css";
import Superhero from "./components/Superheros/Superhero/Superhero";
import Superheros from "./components/Superheros/Superheros";
import { useState, useRef, useEffect } from "react";


export default function App() {
  // State avec useState // 
  const [favoriteHero, setfavoriteHero] = useState();
  const [nouveauSuperhero, setNouveauSuperhero] = useState({
    nom:"Anonyme", 
    description:"", 
    image:""
  })

  
  // Variables useRef // 
  const nom = useRef(); 
  const description = useRef(); 
  const image = useRef(); 

  
  // Cycle avec le useEffect // 
  useEffect(() => {
    image.current.focus(); 

  }, [  
        nouveauSuperhero.nom, 
        nouveauSuperhero.description, 
        nouveauSuperhero.image
      ]);
  
  useEffect(() => {
    nom.current.value ="";
    description.current.vlaue = ""; 
    image.current.value = ""; 
  }, 
  [nouveauSuperhero.nom]);

  // Fonction
  const superheroClicked = (nom) => {
    setfavoriteHero(nom);
  };

  const sauvegarderLesuperhero = () => {
    setNouveauSuperhero(ancienSuperhero => ({
    ...ancienSuperhero, nom: nom.current.value}));
    
    setNouveauSuperhero(ancienSuperhero => ({
    ...ancienSuperhero, description: description.current.value}));
    
    setNouveauSuperhero(ancienSuperhero => ({
    ...ancienSuperhero, image: image.current.value}));
  };

  return (
    <main>
      <h1>Marvel</h1>
      <Superheros>
        {/* Super hero 1 */}
        <Superhero
          nom="Iron Man"
          description="Anthony « Tony » Stark, alias Iron Man est un super-héros évoluant dans
             l'univers Marvel de la maison d'édition Marvel Comics"
          films={["Iron Man 1", "Iron Man 2", "Iron Man 3"]}
          image="https://playcontestofchampions.com/wp-content/uploads/2023/04/champion-iron-man-infinity-war.webp"
          details="Iron Man est un film américano-canadien réalisé par Jon Favreau, sorti en 2008.
          Il raconte les origines et les débuts du personnage éponyme issu du comics publié par Marvel. 
          Il s'agit de la première production de l'univers cinématographique Marvel, et du premier film de la phase une."
          isFavoriteHero={favoriteHero == "Iron Man"}
          superheroClicked={superheroClicked}
        />

        {/* Super hero 2 */}
        <Superhero
          nom="Loki"
          description="Loki tient le rôle du pire ennemi de son demi-frère Thor. À la base un super-vilain, il est parfois dépeint comme un anti-héros"
          image="https://www.rollingstone.fr/wp-content/uploads/2021/04/loki.png"
          details="Loki est une divinité et un super-vilain évoluant dans l'univers Marvel de la maison d'édition Marvel Comics. 
          Créé par les scénaristes Stan Lee et Larry Lieber, ainsi que le dessinateur Jack Kirby, 
          le personnage de fiction apparaît pour la première fois dans le comic book Journey into Mystery #85 en octobre 1962."
          isFavoriteHero={favoriteHero == "Loki"}
          superheroClicked={superheroClicked}
        />

        {/* super hero 3 */}
        <Superhero
          nom="Captain America"
          description="Steven « Steve » Rogers, alias Captain America est un super-héros évoluant dans l'univers Marvel de la maison d'édition Marvel Comics"
          image="https://media.cnewyork.net/resize/uploads/2016/07/captain-america-696x435.jpg?format=auto"
          details="Conçu à l'origine comme une figure patriotique américaine en réaction au régime nazi, le personnage devient actif avant même l'entrée en guerre officielle des États-Unis dans la Seconde Guerre mondiale, 
          en décembre 1941. Dès le début de sa publication, il est perçu comme le porte-drapeau des valeurs démocratiques de son pays et comme un défenseur du monde libre contre les totalitarismes, 
          notamment le Troisième Reich[4]."
          isFavoriteHero={favoriteHero == "Captain America"}
          superheroClicked={superheroClicked}
        />
        <Superhero
          nom={nouveauSuperhero.nom}
          description={nouveauSuperhero.description != "" ? nouveauSuperhero.description : undefined}
          image={nouveauSuperhero.image != "" ? nouveauSuperhero.image : undefined}
        />
        {/* Paramettrage de notre super hero  */}
        <div
          style={{
            border: "1px solid black",
            padding: "15px",
          }}
        >
          <h3 style={{ textAlign: "center" }}>Crée ton propre super hero</h3>
          <div>
            <label htmlFor="nom">Nom</label>
            <input
              type="text"
              name="nom"
              id="name"
              ref={nom}
              style={{
                padding: 5,
                marginTop: 5,
                fontSize: 14,
                display: "block",
                width: "100%",
              }}
            />
          </div>
          <div style={{ marginTop: 10 }}>
            <label htmlFor="description">Description</label>
            <input
              type="text"
              name="description"
              id="description"
              ref={description}
              style={{
                padding: 5,
                display: "block",
                marginTop: 5,
                width: "100%",
              }}
            />
          </div>
          <div style={{ marginTop: 10 }}>
            <label htmlFor="image">Photo</label>
            <input
              type="text"
              name="image"
              id="image"
              ref={image}
              style={{
                padding: 5,
                display: "block",
                marginTop: 5,
                width: "100%",
              }}
            />
          </div>
          <div
            style={{ display: "flex", justifyContent: "end", marginTop: 10 }}
            onClick={sauvegarderLesuperhero}
          >
            <button>Modifer</button>
          </div>
        </div>
      </Superheros>
    </main>
  );
}
