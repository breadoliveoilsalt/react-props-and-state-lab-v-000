import React from 'react';

class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "all"
    };
    // this.handleChange = this.handleChange.bind(this)
    // Seems I don't need the above.  Wonder if I need to base the option
    // values below on a prop.  Like do a for each loop on the filters to render
    // a variable and then add {variable} to the html below.
  }


  // Used to have onChange={this.handleChange}
  // this caused more tests not to pass (in return)
    // onChange = {this.props.onChangeType}
  // this caused even more tests not to pass (in return):
    // onChange={this.props.onChangeType(this.state.type)}
  handleChange = (event) => {
    this.setState(
      {type: event.target.value},
      // this.props.onChangeType(this.state.type)
    )

    this.props.onChangeType(this.state.type)
  }

  render() {
    // The below can't work b/c filters is not an array.
    // const options = this.props.filters.map((typeHash, i) => {
    //   return (<option value="{hashType.type}">{hashType.type}</option>)
    // })

    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" value={this.state.type} onChange={this.handleChange}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.props.onFindPetsClick}>Find pets</button>
        </div>
      </div>
    );
  }
}

export default Filters;
