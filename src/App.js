import logo from './logo.svg';
import './App.css';
import Hello from './components/05_Props';
import Welcome from './components/05_Props1';

function App() {
  return (
    <div className="App">
      <Hello name="Bruce" heroName="Batman">
        <p>This is chilren props</p>
      </Hello>
      <Hello name="Clark" heroName="Superman">
        <button>Action</button>
      </Hello>
      <Hello name="Diana" heroName="Wonder woman"/>

      <Welcome name="Bruce" heroName="Batman"/>
      <Welcome name="Clark" heroName="Superman"/>
      <Welcome name="Diana" heroName="Wonder woman"/>
    </div>
  );
}

export default App;
