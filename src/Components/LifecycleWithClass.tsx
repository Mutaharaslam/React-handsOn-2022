// Mounting – Birth of your component
// Update – Growth of your component
// Unmount – Death of your component (cleanup phase)
// componentDidMount -> it is called when your component is mounted and ready.
// componentDidUpdate -> when component props or state update then this method will call.
// componentWillUnmount -> component unmounted and destroy. (cleanup phase)
// shouldComponentUpdate -> if you would like to render component or not

import { Component } from "react";

export interface IProps {
  initialValue: number;
}
export interface IState {
  count: number;
  hideComponent: boolean;
}

export class LifecycleMethod extends Component<IProps, IState> {
  state: IState = {
    count: this.props.initialValue,
    hideComponent: false,
  };

  componentDidMount() {
    console.log("componentDidMount called");
    this.setState({ count: this.state.count + 1 });
  }

  componentWillReceiveProps(nextProps: IProps) {
    console.log("componentWillReceiveProps called");
  }

  componentDidUpdate(prevProps: IProps, prevState: IState) {
    console.log("componentDidUpdate called", prevProps, prevState);
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate called");
    return true;
  }

  onClickButton = () => {
    this.setState({ count: this.state.count + 1, hideComponent: true });
  };

  render() {
    console.log("render called");
    return (
      <div>
        Count with class component: {this.state.count} <br />
        <button onClick={this.onClickButton}>Incrementa value </button>
        {!this.state.hideComponent && <Information />}
      </div>
    );
  }
}

export class Information extends Component {
  componentWillUnmount() {
    console.log("componentWillUnmount called");
    // cleanup phase
  }
  render() {
    return <div>information of unmounted Component</div>;
  }
}
