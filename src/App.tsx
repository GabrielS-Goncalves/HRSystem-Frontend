import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Login from './containers/login/login'
import './App.css'
import Dashboard from './containers/dashboards/dashboard'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Navigate to="/app/login" replace /> }/>
        <Route path="/app/login" element={ <Login/> }/>
        <Route path="/app/dashboard" element={ <Dashboard/> }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
