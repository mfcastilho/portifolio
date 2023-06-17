import './App.css';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import TopPart from './components/toppart/TopPart';

function App() {

     return (
          <div className='app'>
               <Navbar />
               <TopPart />
               <Home />
          </div>
     )
}

export default App;
