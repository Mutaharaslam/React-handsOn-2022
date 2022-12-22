// Mounting – Birth of your component
// Update – Growth of your component
// Unmount – Death of your component (cleanup phase)
// componentDidMount -> it is called when your component is mounted and ready.
// componentDidUpdate -> when component props or state update then this method will call.
// componentWillUnmount -> component unmounted and destroy. (cleanup phase)
// shouldComponentUpdate -> if you would like to render component or not
// Function component -> useEffect -> Hook

import { Component, useEffect, useState } from "react";

export interface IProps {
  initialValue: number;
}
export interface IState {
  count: number;
  hideComponent: boolean;
}

export function LifecycleMethodWithFunction(props: IProps) {
  const [count, setCount] = useState(props.initialValue);
  // only one time componentDidMount
  useEffect(() => {
    console.log("one time useEffect");
    setCount(count + 1);
  }, []);
  // when count value change
  useEffect(() => {
    console.log("useEffect called when count value change");
    // Component Unmount
    return () => {
      console.log("useEffect Unmount phase");
    };
  }, [count]);
  // everytime call
  useEffect(() => {
    console.log("useEffect called everything");
  });
 
  function setCountValue() {
    setCount(count + 1);
  }
  return (
    <div>
      Count with function component: {count} <br />
      <button onClick={setCountValue}>Increment value</button>
    </div>
  );
}
