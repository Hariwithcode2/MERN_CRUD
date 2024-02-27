import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Create from './Components/Create';
import Read from './Components/Read';
import Update from './Components/Update';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Routes>
          <Route path='/' element={<Create/>}exact/>
          <Route path='/read' element={<Read/>}exact/>
          <Route path='/update' element={<Update/>}exact/>
          
         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
