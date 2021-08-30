import './App.css';
import { generatePalette } from './colorHelpers';
import Palette from './Palette';
import seedColors from './seedColors';

function App() {
  return (
    <div>
      <Palette palette={generatePalette(seedColors[4])}/>
    </div>
  );
}

export default App;
