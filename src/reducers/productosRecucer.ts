import { Action } from "redux"

const initialState = {
    productos: [],
    error: null,
    loading: false
}

export default function( state = initialState, action:Action ) {
    switch( action.type ){
        default:
            return state
    }
}