import * as React from 'react';

class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {count: 0, name: ''};
    }
  
    componentDidMount() {
      this.setState({
        name: this.props.name
      });
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
        <div className = "elem">
          <h2>{this.state.name}</h2>
          <h2>{this.state.count}</h2>
        </div>
      );
    }
  }
  
export default Counter;