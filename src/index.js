import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import Counter from './Counter';
import { createStore } from 'redux';

const initialState = {
    pic:Array(10).fill(1).map((el,i)=>(i+1)),
    count:0
};

function reducer(state=initialState, action){
    switch (action.type){
        case 'INCREMENT': {
                            if (state.count ===10) return{count: state.count-9};
                            return{count: state.count + 1};
                           }
        case 'DECREMENT':  {
            if (state.count ===1) return{count: state.count+9};
            return{count: state.count -1};
              };

        default: return state;
    }
}
const store = createStore(reducer);

const App = () => (
    <Provider store={store}>
        <Counter/>
    </Provider>
);

render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

