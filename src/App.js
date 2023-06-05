import './App.css';
import AddTask from './Components/Addtask';
import ListTask from './Components/ListTask';


function App() {
  return (
    <div className="App">
      <h2> Todo list App</h2>
    <ListTask />
    <AddTask />
  </div>
  );
}

export default App;
