import { createSlice } from "@reduxjs/toolkit"
import { ActionWithPayload } from "../models/actionPayload"
import { IProducto } from "../models/producto"

import { 
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_EXITO,
    DESCARGA_PRODUCTOS_ERROR
} from '../types'

export interface IState {
    productos: IProducto[],
    error: boolean | null,
    loading: boolean
}

const initialState = {
    productos: [],
    error: null,
    loading: false
} as IState


export const productosSlice = createSlice({
    name: "producto",
    initialState,
    reducers: {
        comenzarDescargaProductos: (state, action) => {
            state.loading = action.payload
        }
    }
})

// export default function( state : typeof initialState, action:ActionWithPayload<IState> ) {

//     switch( action.type ){
//         case COMENZAR_DESCARGA_PRODUCTOS:
//         case AGREGAR_PRODUCTO:
//             return {
//                 ...state,
//                 loading: action.payload
//             }
//         case AGREGAR_PRODUCTO_EXITO:
//             return {
//                 ...state,
//                 loading: false,
//                 productos: [...state.productos, action.payload]
                
//             }
//         case AGREGAR_PRODUCTO_ERROR:
//         case DESCARGA_PRODUCTOS_ERROR:
//             return {
//                 ...state,
//                 loading: action.payload
//             }
//         case COMENZAR_DESCARGA_PRODUCTOS:
//             return {
//                 ...state,
//                 loading: action.payload
//             }
//         case DESCARGA_PRODUCTOS_EXITO:
//             return {
//                 ...state,
//                 loading: false,
//                 error: null,
//                 productos: action.payload
//             }
//         default:
//             return state
//     }
// }

export const {comenzarDescargaProductos} = productosSlice.actions
export default productosSlice.reducer