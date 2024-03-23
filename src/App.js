import './App.css';
import BtnBar from './components/BtnBar/BtnBar';
import SolveBtn from './components/BtnBar/SolveBtn/SolveBtn';
import ColumnContainer from './components/ColumnContainer/ColumnContainer';

function App() {

  return (
    <div className="App">
      <h1 className='headerText'>Binary Sudoku Solver</h1>
      <ColumnContainer/>
      <SolveBtn/>
      <BtnBar/>
    </div>
  );
}

export default App;
