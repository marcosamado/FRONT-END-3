import styles from "./Producto.module.css"

const Producto = (props) => {

    const {id,nome,image,preco} = props.prod;

    return (
        <li className={styles.li}>
            <h2>{nome}</h2>
            <img className={styles.img} src={image} />
            <h3>{preco}</h3>
        </li>
    )
}

export default Producto;