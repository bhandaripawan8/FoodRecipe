import './App.css'
import { Routes, Route} from 'react-router-dom';
import Home from './Pages/Home/Home'
import Navbar from './Components/Navbar'
import Favourites from './Pages/Favourites/Favourites'
import Details from './Pages/Details/Details'

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/favourites' element = {<Favourites/>}/>
      <Route path='/details/:id' element = {<Details/>}/>
    </Routes>
    </>
  )
}

export default App
