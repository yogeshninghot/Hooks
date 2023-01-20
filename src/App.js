import './App.css';
import UseState from "./component/UseState"
import UseRef from './component/UseRef';
import BmiCalc from './component/BmiCalc';

function App() {
  return (
    <div className="App">
      <UseState/>
      <UseRef/>
      <BmiCalc/>
    </div>
  );
}

export default App;
