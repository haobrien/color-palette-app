import './App.css';
import Palette from './Palette';
import seedColors from './seedColors';

function App() {
  return (
    <div>
      <Palette {...seedColors[0]}/>
    </div>
  );
}

export default App;
