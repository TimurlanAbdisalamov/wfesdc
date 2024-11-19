import React, { useState, useEffect } from 'react';

export default function ButtonName() {
  const [name, setName] = useState('');  
  const [names, setNames] = useState([]); 

  
  useEffect(() => {
    const savedNames = localStorage.getItem('names');
    if (savedNames) {
      setNames(JSON.parse(savedNames));
    }
  }, []);

  
  useEffect(() => {
    localStorage.setItem('names', JSON.stringify(names));
  }, [names]);

  
  const addName = () => {
    if (name.trim() !== '') {
      setNames([...names, name]);
      setName('');  
    }
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="ВВОДИ СЮДА ЧТО!!!!"
      />
      <button onClick={addName}>НАЖИМАЙ СЮДА НАДЕЮСЬ СПРАВИШЬСЯ</button>
      <ul>
        {names.map((n, index) => (
          <li key={index}>{n}</li>
        ))}
      </ul>
    </div>
  );
}
