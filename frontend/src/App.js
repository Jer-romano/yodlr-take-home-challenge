import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navigation from './routes-nav/Navigation';
import Routes from './routes-nav/Routes';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navigation/>
      <Routes/>
    </div>
    </BrowserRouter>
  );
}

export default App;
