import React, { useState } from 'react';

function App() {

  const [showCat, setShowCat] = useState(false);
  const [showDog, setShowDog] = useState(false);
  const [showRabbit, setShowRabbit] = useState(false);
  const [showLion, setShowLion] = useState(false);

  const animals = [
    {
      name: "Cat",
      age: 3,
      species: "Domestic Shorthair"
    },
    {
      name: "Dog",
      age: 5,
      species: "Golden Retriever"
    },
    {
      name: "Rabbit",
      age: 2,
      species: "Holland Lop"
    },
    {
      name: "Lion",
      age: 5,
      species: "Leo"
    },
    
  ];

  return (
    <div>
      <h2>Conditional Display About Animals</h2>
      {/* Buttons to toggle visibility of each animal */}
      <div>
        <button onClick={() => setShowCat(!showCat)}>
          {showCat ? 'Hide Cat' : 'Show Cat'}
        </button>
        {showCat && (
          <div>
            <h2>Cat Details</h2>
            <p>Name: {animals[0].name}</p>
            <p>Age: {animals[0].age}</p>
            <p>Species: {animals[0].species}</p>
          </div>
        )}
      </div>

      <div>
        <button onClick={() => setShowDog(!showDog)}>
          {showDog ? 'Hide Dog' : 'Show Dog'}
        </button>
        {showDog && (
          <div>
            <h2>Dog Details</h2>
            <p>Name: {animals[1].name}</p>
            <p>Age: {animals[1].age}</p>
            <p>Species: {animals[1].species}</p>
          </div>
        )}
      </div>

      <div>
        <button onClick={() => setShowRabbit(!showRabbit)}>
          {showRabbit ? 'Hide Rabbit' : 'Show Rabbit'}
        </button>
        {showRabbit && (
          <div>
            <h2>Rabbit Details</h2>
            <p>Name: {animals[2].name}</p>
            <p>Age: {animals[2].age}</p>
            <p>Species: {animals[2].species}</p>
          </div>
        )}
      </div>
      <div>
        <button onClick={() => setShowLion(!showLion)}>
          {showLion ? 'Hide Lion' : 'Show Lion'}
        </button>
        {showLion&& (
          <div>
            <h2>Lion Details</h2>
            <p>Name: {animals[2].name}</p>
            <p>Age: {animals[2].age}</p>
            <p>Species: {animals[2].species}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
