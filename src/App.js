import './App.css';
import Funct from './function';
import Errorboundary from './errorboundary';

function App() {
  return (
    <div className="App">
      <Errorboundary>
        <Funct a={["chocalate","icecream","fruits","Cookies"]}/>
      </Errorboundary>
    </div>
  );
}

export default App;