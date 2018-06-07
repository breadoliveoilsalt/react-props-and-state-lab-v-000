import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {

    // {list.map((item, index) => <li key={index}>{item.char}</li>)}

  render() {

    const petList = this.props.pets
    return (
      <div className="ui cards">
          {petList.map((pet, index) => <Pet petInfo={pet} onAdoptPet={this.props.onAdoptPet} key={index}/>)}


      </div>
    );
  }
}

export default PetBrowser;
