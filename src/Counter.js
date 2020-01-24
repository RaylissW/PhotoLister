import React from 'react';
import { connect } from 'react-redux';
import { shuffle} from "./helpers";

function mapStateToProps(state) {
    return {
        pic: state.pic,
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
     let pic=this.props.pic;
     pic =shuffle(this.props.pic);
     this.props.dispatch({type: 'RANDOMIZER', numToShow:pic[0]+1});
 }
  render() {
    return (
        <div>
          <h2>~PhotoLister~</h2>
          <div>
            <button onClick={this.decrement}>Left</button>
            <span>{this.props.count}</span>
              <button onClick={this.increment}>Right</button>
            <button onClick={this.randomizer}>Go Random</button>
          </div>
        </div>
    )
  }
}

export default connect (mapStateToProps) (Counter);