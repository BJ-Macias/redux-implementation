
import { useState } from 'react'
import { useNavigate } from 'react-router'

import { crearNuevoProductoAction } from '../actions/productoActions'

import { IProducto } from '../models/producto'
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks'

const NuevoProducto = () => {

    const [nombre, guardarNombre] = useState('')
    const [precio, guardarPrecio] = useState(0)

    const dispatch = useAppDispatch()

    const navigate = useNavigate()

    const cargando = useAppSelector( state => state.productos.loading)

    const error = useAppSelector(state => state.productos.error)

    const agregarProducto = (producto: IProducto) => dispatch(crearNuevoProductoAction(producto))

    const submitNuevoProducto = (e: any) => {
        e.preventDefault()

        if (nombre.trim() === '' || precio <= 0) {
            return
        }

        console.log("AAAAAAAAAAAAAAAAAA")
        agregarProducto({
            nombre,
            precio
        })

        navigate('/productos')
    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Agregar Nuevo Producto
                        </h2>

                        <form
                            onSubmit={submitNuevoProducto}
                        >
                            <div>
                                <label>Nombre Producto</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Producto"
                                    name="nombre"
                                    value={nombre}
                                    onChange={e => guardarNombre(e.target.value)}
                                />
                            </div>
                            <div>
                                <label>Precio Producto</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Precio Producto"
                                    name="precio"
                                    value={precio}
                                    onChange={e => guardarPrecio(Number(e.target.value))}
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                            >
                                Agregar
                            </button>
                        </form>

                        {cargando ? <p> Cargando...</p> : null}
                        {error ?
                            <p
                                className="alert alert-danger p2 mt-4 text center"
                            >
                                Hubo un error
                            </p>
                            : null
                        }
                    </div>

                </div>

            </div>

        </div>
    )
}

export default NuevoProducto
