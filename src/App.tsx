import './App.css';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import TopPart from './components/toppart/TopPart';
import AboutMe from './components/aboutme/AboutMe';

function App() {

     return (
          <div className='app'>
               <Navbar />
               <TopPart />
               <AboutMe />
               <Home />
          </div>
     )
}

export default App;
