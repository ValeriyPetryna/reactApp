import * as React from 'react';

class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {count: 0};
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        this.props.speed
      );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    
    tick() {
      this.setState({
        count: this.state.count +1,
      });
    }
  
    render() {
      return (
        <div>
          <h2>It is class ticker with speed {this.props.speed}: {this.state.count}</h2>
        </div>
      );
    }
  }
  
export default Counter;