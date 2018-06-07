import React from 'react';

class Filters extends React.Component {
  constructor() {
    super();
  }

  // I added <form> tags below per react js docs
  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>

          <form onSubmit={this.props.onFindPetsClick}>
            <div className="field">
              <select onChange={this.props.onChangeType} name="type" id="type">
                <option value="all">All</option>
                <option value="cat">Cats</option>
                <option value="dog">Dogs</option>
                <option value="micropig">Micropigs</option>
              </select>
            </div>

            <div className="field">
              <button className="ui secondary button">Find pets</button>
            </div>
        </form>
      </div>
    );
  }
}

export default Filters;
