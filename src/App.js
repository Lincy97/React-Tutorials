import logo from './logo.svg';
import './App.css';
import FunctionalComponent from './components/FunctionalComponent';
import ClassComponent from './components/ClassComponent';

function App() {
  return (
    <div className="App">
      <FunctionalComponent name="Bruce" heroName="Batman"/>
      <ClassComponent name="Diana" heroName="Wonder Woman"/>
    </div>
  );
}

export default App;
