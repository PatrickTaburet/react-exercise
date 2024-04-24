import './App.css';
import ClassCount from './components/ClassCount';
import Profile from './components/exercice10/Profile';
// import ClassState from './components/ClassState';
// import FunctionState from './components/FunctionState';
import Todo from './components/Todo';
import FunctionCount from './components/FunctionCount';

function App() {
  return (
    <div className="container text-center">
      {/* <h1 className='text-center'>useState Hooks</h1>
      <ClassState></ClassState>
      <hr />
      <FunctionState></FunctionState> */}
      {/* <FunctionCount></FunctionCount>
      <ClassCount></ClassCount>
      <Todo></Todo> */}
      <Profile></Profile>
    </div>
  );
}

export default App;