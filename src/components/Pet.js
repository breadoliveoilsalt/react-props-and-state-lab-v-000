import React from 'react';

class Pet extends React.Component {
  constructor() {
    super();
  }

  render() {
    // const id = this.props.petInfo.id
    return (
      <div className="card">
        <div className="content">
          <a className="header">Pet name: {this.props.petInfo.name} (gender: ♂ or ♀)</a>
          Gender: {this.props.petInfo.gender === 'male' ? '♂' : '♀'}
          <div className="meta">
            <span className="date">Pet type: {this.props.petInfo.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.petInfo.age}</p>
            <p>Weight: {this.props.petInfo.weight}</p>
          </div>
        </div>
        <div className="extra content">
          <button className="ui primary button" >Adopt pet</button>
          <button className="ui disabled button">Already adopted</button>
        </div>
      </div>
    );
  }
}

export default Pet;
