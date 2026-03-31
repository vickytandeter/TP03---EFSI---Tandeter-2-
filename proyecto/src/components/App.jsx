import Header from "./header";
import Formulario from "./formulario";
import ListaCitas from "./listaCitas";
import "../styles/App.css";

function App() {
  return (
    <>
      <Header />

      <div className="container">
        <div className="row">
          <Formulario />
          <ListaCitas />
        </div>
      </div>
    </>
  );
}

export default App;