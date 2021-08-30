import './App.css';
import { Route, Switch } from 'react-router-dom';
import { generatePalette } from './colorHelpers';
import Palette from './Palette';
import seedColors from './seedColors';

function App() {
  
  function findPalette(id){
    return seedColors.find(function (palette) {
      return palette.id === id
    })
  }

  return (
    <div>
      <Switch>
        <Route
          exact
          path='/'
          render={() => <h1>Palette List goes here</h1>} />
        <Route
          exact
          path='/palette/:id'
          render={(routeProps) => <Palette palette={generatePalette(findPalette(routeProps.match.params.id))} />} />
      </Switch>
      {/* <Palette palette={generatePalette(seedColors[4])} /> */}
    </div>
  );
}

export default App;
