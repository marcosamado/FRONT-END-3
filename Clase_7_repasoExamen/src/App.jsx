import { useState } from "react";
import Formulario from "./Components/Formulario";
import Tareas from "./Components/Tareas";

function App() {

  const initialStateTareas = [{
    titulo : "asd",
    descripcion: "asdasdasd"
  }]

  const [tareas, setTareas] = useState(initialStateTareas);

  const agregarTareas = (tarea) => {
    setTareas([...tareas, tarea])
  }



  return (
    <>
      <h1 className="text-center mb-5">Todo App</h1>
      <Formulario addTarea={agregarTareas}/>
      <Tareas tareas={tareas}/>
    </>
  )
}

export default App
