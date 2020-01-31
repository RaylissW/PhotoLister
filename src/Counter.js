import React from 'react';
import { connect } from 'react-redux';
import { shuffle} from "./helpers";
import './Counter.css';

function mapStateToProps(state) {
    return {
        pic: state.pic,
        count: state.count,
        picShow:state.picShow
    };
}

class Counter extends React.Component {
  //state = { count: 0 }

  increment = () => {
      this.props.dispatch({type: 'INCREMENT'});
  }

  decrement = () => {
      this.props.dispatch({type: 'DECREMENT'});
  }
 randomizer =()=>{
      debugger;
     let pic=this.props.pic;
     pic =shuffle(this.props.pic);
     this.props.dispatch({type: 'RANDOMIZER', payload: {numToShow:pic[0]}});
 }
 shower=()=>{
     this.props.dispatch({type: 'SHOWER'});
 }
  render() {
    return (
        <div className={"Counter"}>
            <h1 className={"C"}>~PhotoLister~</h1>
          <div>
            <button onClick={()=>{ this.decrement(); this.shower()}}>Left</button>
              <text>{this.props.picShow}</text>
            <span>{this.props.count}</span>
              <button onClick={()=>{ this.increment(); this.shower()}}>Right</button>
            <button onClick={()=>{ this.randomizer(); this.shower()}}>Go Random</button>
          </div>
        </div>
    )
  }
}

export default connect (mapStateToProps) (Counter);