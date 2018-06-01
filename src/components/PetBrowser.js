import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  render() {
    const petInfo = this.props.pets.map((petHash, i) =>
      {
        let bool = this.props.adoptedPets.includes(petHash.id)
        // allPets.forEach(petId => {
        //   if (petId === petHash.id) {
        //     bool = true
        //   } else {
        //     bool = false
        //   }
        // }
        // )

        return (<Pet key={i} pet={petHash} onAdoptPet={this.props.onAdoptPet} isAdopted={bool} />)
      })

    return (
      <div className="ui cards">
        // <code>&lt;Pet /&gt;</code> &nbsp; components should go here
        {petInfo}
      </div>
    );
  }
}

export default PetBrowser;
