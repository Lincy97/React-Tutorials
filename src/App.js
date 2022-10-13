import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import WithJSX from './components/WithJSX';
import WithoutJSX from './components/WithoutJSX';

function App() {
  return (
    <div className="App">
      <WithJSX/>
      <WithoutJSX/>
      {/* <Greet/>
      <Welcome /> */}
    </div>
  );
}

export default App;
