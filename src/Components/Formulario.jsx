import { useState } from "react";
import Card from "./Card";

function Formulario() {
  const [cancion, setCancion] = useState("");
  const [interprete, setInterprete] = useState("");
  const [tarjeta, setTarjeta] = useState(false);
  const [mensaje, setMensaje] = useState(false);

  function handleChangeCancion(event) {
    setCancion(event.target.value);
  }

  function handleChangeInterprete(event) {
    setInterprete(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (
      cancion.trim().length < 3 ||
      cancion.trim()[0] === " " ||
      interprete.trim().length < 6
    ) {
      setMensaje(true);
      setTarjeta(false);
      return;
    }
    console.log();
    setTarjeta(true);
    setMensaje(false);
  }

  return (
    <div>
    <div>
      <form onSubmit={handleSubmit}>
        <label>Canción: </label>
        <input
          type="text"
          value={cancion}
          onChange={handleChangeCancion}
        ></input>
        <label>Interprete: </label>
        <input
          type="text"
          value={interprete}
          onChange={handleChangeInterprete}
        ></input>
        <button type="submit">Enviar</button>
        {mensaje && (
          <span>Por favor chequea que la información sea correcta.</span>
        )}
      </form>
      </div>
      <div>
      {tarjeta && <Card cancion={cancion} interprete={interprete}></Card>}
      </div>
     
    </div>

  );
}

export default Formulario;