function Card(props) {
    return (
      <div className="class-card">
          <h1>Ahora sabemos que tu cancion favorita es</h1>
          <h2>{props.cancion} de {props.interprete}</h2>
      </div>
    );
  }
  
  export default Card;
  