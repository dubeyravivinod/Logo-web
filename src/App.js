import logo from './logo.svg';
import './App.css';
import Navbar from './components/Nav/Navbar';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
