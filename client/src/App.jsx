import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './signUp'
import Login from './Login'
import Home from './Home'

function App() {
  return (
       <BrowserRouter>
        <Routes>
            <Route path='/register' element={<SignUp />}/>
            <Route path='/login' element={<Login />} />
            <Route path='/home' element={<Home />} />
        </Routes>
       </BrowserRouter>
  )
}

export default App
