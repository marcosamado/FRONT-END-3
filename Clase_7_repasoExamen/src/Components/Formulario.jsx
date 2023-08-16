import { useState } from "react";

const Formulario = ({addTarea}) => {



    const [datosForm, setDatosForm] = useState({
        titulo: "",
        descripcion: ""
    })

    const handleChange = (e) => {
        setDatosForm({
            ...datosForm,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {

        
        e.preventDefault();
        
        if(datosForm.titulo.trim() && datosForm.titulo.length >= 3 && datosForm.descripcion.trim() && datosForm.descripcion.length >= 6){
            addTarea(datosForm);

            setDatosForm({
                titulo: "",
                descripcion: ""
            })
        }else {
            alert("datos ingresados incorrectos");
        }

    }

    return (
        <form className="form-control" onSubmit={handleSubmit}>
            <input className="form-control mb-2" type="text" placeholder="Ingresa tu nombre" name="titulo" value={datosForm.titulo} onChange={handleChange}  />
            <textarea className="form-control mb-3" type="text" placeholder="Ingresa la descripcion" name="descripcion" value={datosForm.descripcion} onChange={handleChange}  />
            <button className="btn btn-success" type="submit">Agregar Tarea</button>
        </form>
    )

}

export default Formulario;