import React from 'react';
import { connect } from 'react-redux';


function mapStateToProps(state) {
    return {
        count: state.count
    };
}

class Counter extends React.Component {
  state = { count: 0 }

  increment = () => {
      this.props.dispatch({type: 'INCREMENT'});
  }

  decrement = () => {
      this.props.dispatch({type: 'DECREMENT'});
  }
 randomizer =()=>{

     this.props.dispatch({type: 'RANDOMIZER'});
 }
  render() {
    return (
        <div>
          <h2>~PhotoLister~</h2>
          <div>
            <button onClick={this.decrement}>-</button>
            <span>{this.props.count}</span>
            <button onClick={this.increment}>+</button>
          </div>
        </div>
    )
  }
}

export default connect (mapStateToProps) (Counter);