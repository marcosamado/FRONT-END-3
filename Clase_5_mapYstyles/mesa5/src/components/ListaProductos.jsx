import Producto from "./Producto";
import styles from "./ListaProductos.module.css";

const ListaProductos = (props) => {
    return (
        <ul className={styles.ul}>
            {
                props.prod.map(producto => (
                    <Producto key={producto.id} prod={producto}/>
                ))
            }
        </ul>
    )
}

export default ListaProductos;