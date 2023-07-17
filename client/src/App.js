import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {Blog, BlogDetail, Home, NewsLetter} from './pages/index.js'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/blogs' element={ <Blog /> } />
        <Route path='/newsLetter' element={ <NewsLetter /> } />
        <Route path='/blogDetail/:id' element={ <BlogDetail /> } />
      </Routes>
    </Router>
  )
}

export default App
