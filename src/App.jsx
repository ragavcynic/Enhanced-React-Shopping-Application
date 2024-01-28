
import Header from './components/Header'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Cart from './components/Cart'
import Filter from './components/Filter'


function App() {
 

  return (
    <BrowserRouter>
      <Header/>
      <div>
        <Routes>
          <Route path='/' exact element={<Home />} > 
          </Route>
          <Route path='/cart' exact element={<Cart/> } >
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
