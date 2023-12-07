import './App.css';
import freeCodeCampLogo from './assets/freecodecamplogo.png';
import TaskList from './components/TaskList.jsx';

function App() {
  return (
    <div className="app-task">
      <div className='logo-container'>
        <img
          src= {freeCodeCampLogo}
          alt= 'logo'
          className='logo' />
      </div>
      <div className='principal-task-list'>
        <h1>My Tasks</h1>
        <TaskList />
      </div>
    </div> 
  );
}

export default App;
