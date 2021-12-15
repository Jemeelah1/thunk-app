import './App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadBooks, addOnButtonAction } from './Redux/Action/action';

class App extends Component {
  state = {
    book: { title: '',
            // price: '',
            // image: '',
            // description: '',
            // id: ''
          }
  }
  handleChange=(e) => {
    this.setState({book: {title:e.target.value}});
  }
  handleSubmit = (e) => {
    e.preventDefault();
    //call action here
    this.props.dispatch(addOnButtonAction(this.state));
    console.log(this.props.book);
    console.log(this.state);
  }

  render() {
    return (
      <div>
          <h2 className="App">Add Course</h2>
        <div className="App">
          <form onSubmit = {this.handleSubmit}>
            <input type="text" placeholder="Enter book" onChange={this.handleChange}/>
            <button type='submit'>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    book: state.reducerFunc
  }
}

export default connect (mapStateToProps) (App);
