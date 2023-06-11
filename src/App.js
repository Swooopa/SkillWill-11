import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1> პორტფოლიო</h1>
      <img src={process.env.PUBLIC_URL + 'https://images.pexels.com/photos/14579361/pexels-photo-14579361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} alt="ჩემი სურათი" />
      <p>მოგესალმებით! მე ვარ სტეფანე კობახიძე!</p>
    </div>
  );
}

export default App;
