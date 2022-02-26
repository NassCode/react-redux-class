import { connect } from 'react-redux';
import { Component } from 'react';


class Item extends Component {
  increment = () => {
    this.props.increment();
  }

  decrement = () => {
    this.props.decrement();
  }
  render() {
    return (
      <div className="App">

            <button onClick={() => this.decrement()}>-</button>
            <h1>{this.props.count}</h1>
            <button onClick={() => this.increment()}>+</button>
           
          
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.counter[0].count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({type: "INCREMENT"}),
    decrement: () => dispatch({type: "DECREMENT"})

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Item);
