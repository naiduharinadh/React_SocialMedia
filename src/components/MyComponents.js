import React, { Component } from 'react';

class MyClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Hello from the class component!',
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}

const MyFunctionalComponent = () => {
  const message = 'Hello from the functional component!';

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
};

export { MyClassComponent, MyFunctionalComponent };
