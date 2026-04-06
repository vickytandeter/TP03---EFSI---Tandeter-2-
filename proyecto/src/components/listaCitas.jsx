import Cita from "./cita";

function ListaCitas({ citas }) {
  return (
    <>
      <h2>Administra tus citas</h2>

      {citas.map((cita) => (
        <p key={cita.id}>{cita.mascota}</p>
      ))}

    </>
  )
}

export default ListaCitas;