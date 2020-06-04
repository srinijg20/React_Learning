import React from 'react';

function FormattedDate(props) {
  //console.log('inside child component');
  
    return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
  }
  
  class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    componentDidMount() {
      console.log('[clock.js] componentDidMount')
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }

    shouldComponentUpdate(nextProps,nextState){
      //console.log('clock.js shouldcomponentUpdate')
      if (nextProps.persons!==this.props.name) {
        return true;
      } else {
        return false;
      }
      
    }

    componentDidUpdate(){
      //console.log('[clock.js] componentdidupdate');
      //clearInterval(this.timerID);
      
    }
  
    // componentWillUnmount() {
    //   console.log('[clock.js] component will unmount');
      
    //   clearInterval(this.timerID);
    // }
  
    tick() {
      this.setState({
        date: new Date()
      });
      //clearInterval(this.timerID)
    }
  
    render() {
      //console.log('clock.js render');
      
      return (
        <div>
          <h1>Hello, world!</h1>
          <FormattedDate date={this.state.date} />
        </div>
      );
    }
  }

  export default Clock;