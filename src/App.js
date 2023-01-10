import './App.css'
import './style/translate.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Motivate from './pages/Motivate';
import Translate from "./pages/Translate";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/'></Route>
          <Route path='/translate' element={<Translate /> }></Route>
          <Route path='/motivate' element={<Motivate />}></Route>
          </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;