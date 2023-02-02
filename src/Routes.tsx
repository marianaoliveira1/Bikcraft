import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Header } from "./components/Header"
import { Bicicletas } from "./pages/Bicicletas"
import { Contato } from "./pages/Contato"
import { Home } from "./pages/Home"
import { Seguros } from "./pages/Seguros"

export function Router() {
    return(
        <div>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={ <Home />} />
            <Route path='/bicicletas' element={ <Bicicletas />} />
            <Route path='/contato' element={ <Contato />} />
            <Route path='/seguros' element={ <Seguros />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
}