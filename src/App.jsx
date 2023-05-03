import './App.css'
import Header from './components/Header/Header' 
import { BrowserRouter } from 'react-router-dom';

import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (

   <BrowserRouter>
    <Header/>
   </BrowserRouter>

  )
}

export default App
