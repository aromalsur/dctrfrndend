import { Route, Routes } from 'react-router-dom';
import './App.css';
import Alldoc from './Components/Alldoc/Alldoc';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Viewsdoc from './Components/Viewdoc/Viewsdoc';

function App() {
  return (
    <div className="App">
 

<Header/>
 <Routes>

  <Route path='/' element={<Alldoc/>} />
  <Route path='/view/:id' element={<Viewsdoc/>} />
 </Routes>

<Footer/>

    </div>
  );
}

export default App;
