import { IProduce } from "immer/dist/internal"
import { Route } from "react-router"
import { Link } from "react-router-dom"
import { IProducto } from "../models/producto"
import EditarProducto from "./EditarProducto"


const Producto = ({ producto }: { producto: IProducto }) => {
    const { nombre, precio, id } = producto
    return (
        <tr>
            <td>{nombre}</td>
            <td>
            {
                <span className="font-weight-bold">
                    ${precio}
                </span>
            }
            </td>
            <td className="acciones">
                <Link 
                    className="btn btn-primary mr-2"
                    to={"/productos/${id}"}
                >
                    Editar
                </Link>
                <button
                    type="button"
                    className="btn btn-danger"
                >
                    Eliminar
                </button>
            </td>
        </tr>
    )
}

export default Producto