

import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_EXITO,
    DESCARGA_PRODUCTOS_ERROR
} from '../types'

import clienteAxios from '../services'

import Swal from 'sweetalert2'

import { IProducto } from '../models/producto'
import { AppDispatch } from '../store'
import { comenzarDescargaProductos } from '../reducers/productosReducer'

export const crearNuevoProductoAction: any = (producto: IProducto) => {
    return async (dispatch: AppDispatch) => {
        dispatch(comenzarDescargaProductos(true))
        // try {

        //     await clienteAxios.post('/productos', producto)

        //     dispatch(agregarProductoExito(producto))

        //     Swal.fire(
        //         'Correcto',
        //         'El producto se agrego correctamente',
        //         'success'
        //     )
        // } catch (error) {
        //     console.log(error)
        //     dispatch(agregarProductoError(true))

        //     Swal.fire({
        //         icon: 'error',
        //         title: 'Hubo un error',
        //         text: 'Hubo un error, intentalo de nuevo'
        //     })
        // }
    }
}

const agregarProducto = () => ({
    type: AGREGAR_PRODUCTO,
    payload: true
})
const agregarProductoExito = (producto:IProducto) => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
})
const agregarProductoError = (estado:boolean) => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado
})

export const obtenerProductosAction = () => {
    return async (dispatch: AppDispatch) => {

        dispatch( descargarProductos())
        try {
            const respuesta = await clienteAxios.get('/productos')
            dispatch( descargaProductosExitosa(respuesta.data))
        } catch (error) {
            console.log(error)
            dispatch( descargaProductosError())
        }
    }
}

const descargarProductos = () => ({
    type: COMENZAR_DESCARGA_PRODUCTOS,
    payload: true
})

const descargaProductosExitosa = (productos:IProducto[]) => ({
    type: DESCARGA_PRODUCTOS_EXITO,
    payload: productos
})

const descargaProductosError = () => ({
    type: DESCARGA_PRODUCTOS_ERROR,
    payload: true
})

