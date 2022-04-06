import React, { useState, useEffect } from 'react';
import { Header, List } from './components';
import { stateArray } from './utils/stateArray';

const App = () => {

  const [array, setArray] = useState(stateArray);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    //updating the arrays
    setTimeout(() => {
      if (array.length <= 99) { 
        setLoading(true);
        setArray([...array, array.length + 1]);
      }
      if (array.length >= 100) { 
        setLoading(false);
      }
    }, 1000);
  }, [array]);

 

  return (
    <div>
      <Header />
      <List loading={loading} array={array} />
    </div>
  )
}

export default App;
