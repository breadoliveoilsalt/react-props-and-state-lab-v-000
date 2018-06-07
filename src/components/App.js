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

    console.log("New Filter: " + event.target.value)
    this.setState(
      {filters:
        {...this.state.filters,
          type: event.target.value
        },
        adoptedPets: []
      }
    )
  }

  onFindPetsClick = (event) => {
    event.preventDefault()
    if (this.state.filters.type === 'all') {
      fetch('/api/pets')
      .then(res => res.json())
      .then(
        res => {
          console.log(res)
          this.setState({
            pets: res
          })
        })
    }
    else {
      const url = '/api/pets?type=' + this.state.filters.type
      fetch(url)
      .then(res => res.json())
      .then(res => {
        console.log(res)
        this.setState({
          pets: res
        })
      })
    }
  }

  onAdoptPet = (id) => {
    this.setState(
      {adoptedPets:
        [...this.state.adoptedPets,
        id]
      }
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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
