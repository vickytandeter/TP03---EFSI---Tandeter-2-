import './formulario.css'

function Formulario() {
  return (
    <div className="one-half column">
      <h2>Crear mi Cita</h2>

      <form>
        <label>Nombre Mascota</label>
        <input type="text" name = "mascota" className="u-full-width" placeHolder = "Nombre Mascota"/>

        <label>Nombre Dueño</label>
        <input type="text" name = "dueño" className="u-full-width" placeHolder = "Nombre Dueño"/>

        <label>Fecha</label>
        <input type="date" name = "fecha" className="u-full-width" placeHolder = "Fecha"/>

        <label>Hora</label>
        <input type="time" name = "hora" className="u-full-width" placeHolder = "Hora"/>

        <label>Sintomas</label>
        <textarea name = "sintomas" className="u-full-width" placeHolder = "Síntomas"></textarea>

        <button className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </div>
  );
}

export default Formulario;

