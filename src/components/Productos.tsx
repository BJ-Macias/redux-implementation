

import { useEffect } from 'react'

import { obtenerProductosAction } from '../actions/productoActions'
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks'
import { IProducto } from '../models/producto'
import Producto from './Producto'

const Productos = () => {

    const dispatch = useAppDispatch()

    useEffect(() => {
        
        const cargarProductos = () => dispatch( obtenerProductosAction() )
        cargarProductos()

    }, [])

    const productos = useAppSelector( state => state.productos.productos)
    
    return (
        <>
            <h2 className="text-center my-5">Listado de Producto</h2>

            <table className="table table-striped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    { productos.lenght === 0 ? 'No hay productos' :
                        productos.map((producto:IProducto) => (
                            <Producto
                                key={producto.id}
                                producto={producto}
                            />
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default Productos
