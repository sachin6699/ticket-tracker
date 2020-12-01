import React, { useState } from "react";
import styles from "./Counter.module.scss";

const Counter = () => {
    //Set the initial count state to zero
    const [count, setCount] = useState(0);
    //Create plusButton event handler
    const plusButton = () => {
        setCount(prevCount => prevCount + 1)};
    //Create minusButton event handler
    const minusButton = () => {
        setCount(prevCount => prevCount -1);
        };
    return (
        <div className={styles.counter}>
                <button onClick={minusButton}>-</button>
                <h5>{count}</h5>
                <button onClick={plusButton}>+</button>
            </div>
    );
    }
export default Counter;