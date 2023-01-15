import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './Home';


function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Header />
      </header>
      <Home />
      <Footer />

    </div>
  );
}

export default App;
