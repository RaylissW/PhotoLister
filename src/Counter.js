import React from 'react';
import { connect } from 'react-redux';
import { shuffle} from "./helpers";
import './Counter.css';
/*
import j0 from '/public/j0.jpg';
import j1 from './j1.jpg';
import j2 from './j2.jpg';
import j3 from './j3.jpg';
import j4 from './j4.jpg';
import j5 from './j5.jpg';
import j6 from './j6.jpg';
import j7 from './j7.jpg';
import j8 from './j8.jpg';
import j9 from './j9.jpg';
import j10 from './j10.jpg';
*/

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
            <h1>~PhotoLister~</h1>
          <div>
            <button onClick={()=>{ this.decrement(); this.shower()}}>Left</button>
              {console.log(this.props.picShow)}
              <img src={this.props.picShow}/>
            <span>{this.props.count}</span>
              <button onClick={()=>{ this.increment(); this.shower()}}>Right</button>
            <button onClick={()=>{ this.randomizer(); this.shower()}}>Go Random</button>
          </div>
        </div>
    )
  }
}

export default connect (mapStateToProps) (Counter);