import React from 'react';
import { Button } from '../components/Button';
import { connect } from 'react-redux';

class Counter extends React.Component {
  state = { count: 0 };

  increment = () => {
      this.props.dispatch({ type: 'INCREMENT' });
  };

  decrement = () => {
      this.props.dispatch({ type: 'DECREMENT' });
  };

  render() {
      return(
          <div>
              <h2>Counter</h2>
              <div>
                  <Button onClick={this.decrement} name='-'/>
                  <span> {this.props.count} </span>
                  <Button onClick={this.increment} name='+'/>
              </div>
          </div>
      )
  };
};

const mapStateToProps = (state) => {
    return {
        count: state.count
    }
};

export default connect(mapStateToProps)(Counter);