/*global chrome*/
import './App.css'
import { Route, Routes, BrowserRouter} from "react-router-dom";
import Preferences from './pages/Preferences/Preferences';
import Home from './pages/Home/Home';

function App() {
  // chrome.action.setBadgeText({ text: '' });

  return (
    <>
      <div className='max-w-sm min-w-96 dark'>
        <BrowserRouter>
          <Routes>
            <Route path="/preferences" element={<Preferences/>} />
            <Route path="/" element={<Home/>} />
          </Routes>
        </BrowserRouter>
      </div>  
    </>
  )
}

export default App
