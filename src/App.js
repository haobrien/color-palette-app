import React, { Component } from 'react'
import './styles/App.css';
import { Route, Switch } from 'react-router-dom';
import { generatePalette } from './colorHelpers';
import Palette from './Palette';
import seedColors from './seedColors';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      palettes: seedColors
    }
    this.findPalette = this.findPalette.bind(this)
    this.savePalette = this.savePalette.bind(this)
  }

  findPalette(id) {
    return this.state.palettes.find(function (palette) {
      return palette.id === id
    })
  }

  savePalette(newPalette) {
    this.setState({palettes: [...this.state.palettes, newPalette]})
  }

  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path='/palette/new'
            render={(routeProps) => <NewPaletteForm savePalette={this.savePalette} {...routeProps} palettes={this.state.palettes}/>} />
          <Route
            exact
            path='/'
            render={(routeProps) => <PaletteList palettes={this.state.palettes} {...routeProps} />} />
          <Route
            exact
            path='/palette/:id'
            render={(routeProps) =>
              <Palette
                palette={generatePalette(
                  this.findPalette(routeProps.match.params.id))} />} />
          <Route
            exact
            path='/palette/:paletteId/:colorId'
            render={(routeProps) =>
              <SingleColorPalette
                colorId={routeProps.match.params.colorId}
                palette={generatePalette(
                  this.findPalette(routeProps.match.params.paletteId))} />} />
        </Switch>
        {/* <Palette palette={generatePalette(seedColors[4])} /> */}
      </div>
    )
  }
}

export default App;
