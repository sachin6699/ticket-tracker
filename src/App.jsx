import React from 'react';
import styles from "./App.module.scss";

//Containers
import Routes from "./containers/Routes";

// Components
import Card from "./components/Card";
import Counter from "./components/Counter";
import Header from './components/Header';
import Navbar from './components/Navbar';

// data
import people from "./data/people";

const App = () => {
  const getCardJsx = (people) => (
    <Card key={people.id} people={people}/>
);


  return (
    <section className={styles.app}>
      <Navbar />
          <Routes />
      <div>
        <Header />
      </div>
        <div className={styles.content}>
              {people.map(getCardJsx)}
          </div>
  </section>

    
  );
}

export default App; 



