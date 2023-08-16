const Tarea = ({tarea}) => {
    return (
        <div>
            <li className="list-group-item list-group-item-warning">
                <h3>{tarea.titulo}</h3>
                <p>{tarea.descripcion}</p>
            </li>
        </div>
    )
}

export default Tarea;