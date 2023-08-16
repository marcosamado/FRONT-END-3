import Tarea from "./Tarea";

const Tareas = ({tareas}) => {
    return (
        <div>
            <h2 className="text-center mt-5">Tareas Pendientes</h2>
            <ul className="list-group">
                {tareas.map((tarea,index) => (
                    <Tarea key={index} tarea={tarea}/>
                ))}
            </ul>
        </div>
    )
}

export default Tareas;