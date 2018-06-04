import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };
  }

  onChangeType = (event) => {
    this.setState(
      {filters: {
          ...this.state.filters,
          type: event.target.value
        }
      })
  }

  onFindPetsClick = () => {
    if (this.state.filters.type === 'all') { // or === '' ??
      fetch("/api/pets")
    } else {
      fetch(`api/pets?type=${this.state.filters.type}`)
    }
  }

  onAdoptPet = (id) => {
    this.setState(
      {adoptedPets: this.state.adoptedPets << id}
    )
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters filters={this.state.filters} onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/> // Do I add filters= // I'll have to clean up onChangeType
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} adoptedPets={this.state.adoptedPets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
