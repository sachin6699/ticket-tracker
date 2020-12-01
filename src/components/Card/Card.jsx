import React from 'react';
import styles from "./Card.module.scss";
import Counter from "../Counter";

const Card = (props) => {
    const {
        id,
        name,
        role,
    } = props.people;

    return (
    <section className={styles.app}>
        <div className={styles.card}>
                <p>Name: {name}</p>
                <p>Role: {role}</p>
                
        </div>
        <div className={styles.counter}>
            <Counter />
        </div>
</section>
        
    )
}

export default Card;