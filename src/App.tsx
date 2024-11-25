import './App.css'
import { NavBar } from './components/navbar.component'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { FormPage } from './pages/form.page'
import { CardPage } from './pages/card.page'
import { TablePage } from './pages/table.page'

function App() {
  return (
    <>
      <div>
        <NavBar></NavBar>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<FormPage />} />
            <Route path="/form" element={<FormPage />} />
            <Route path="/table" element={<TablePage/>}/>
            <Route path='/card' element={<CardPage/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
