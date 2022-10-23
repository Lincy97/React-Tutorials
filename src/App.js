import logo from './logo.svg';
import './App.css';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import PersonList from './components/PersonList'


function App() {
  return (
    <div className="App">
      <UserGreeting />
      <NameList/>
      <PersonList/>
    </div>
  );
}

export default App;
