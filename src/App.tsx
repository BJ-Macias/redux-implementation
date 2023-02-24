
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Productos from './components/Productos'
import NuevoProducto from './components/NuevoProducto'
import EditarProducto from './components/EditarProducto'

import { Provider } from 'react-redux'
import store from './store'

function App() {

    return (
        <Router>
            <Provider store={store}>

                <Header />

                <div className="container mt-5">
                    <Routes>
                        <Route path="/" element={<h1>Home Page</h1>} />
                        <Route path="/productos" element={<Productos />} />
                        <Route path="/productos/nuevo" element={<NuevoProducto />} />
                        <Route path="/productos/:id" element={<EditarProducto />} />
                    </Routes>
                </div>
            </Provider>
        </Router>
    )
}

export default App
