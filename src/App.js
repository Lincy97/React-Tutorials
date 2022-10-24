import logo from './logo.svg';
import './App.css';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';


function App() {
  return (
    <div className="App">
      <Stylesheet primary={true}/>
      <Inline />
    </div>
  );
}

export default App;
