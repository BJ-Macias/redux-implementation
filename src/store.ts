

import { configureStore } from '@reduxjs/toolkit'
import productos from './reducers/productosReducer'

const store = configureStore({
    reducer: {
        productos
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store