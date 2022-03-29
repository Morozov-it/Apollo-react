import { Route, Routes } from 'react-router-dom';
import './app.scss';
import Characters from './pages/Characters';
import Character from './pages/Character';


function App() {
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Characters />}/>
        <Route path='/:id' element={<Character />} />
        <Route path='*' element={<Characters />} />
      </Routes>
    </div>
  );
}

export default App;
