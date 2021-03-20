import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';


const items = [

  {
    title: 'what is react',
    content: 'React is a front end javascript framework'

  },
  {
    title: 'why use React?',
    content: 'React is a favorite JS library among engineers.'

  },
  {
    title: 'how do you use React ?',
    content: "you use React by creating components"
  }
];

const options = [
  {
    label: 'The color Red',
    value: 'red'
  },
  {
    label: 'The color green',
    value: 'green'
  },
  {
    label: 'The color blue',
    value: 'blue'
  }
];

export default () => {
  const [selected, setSelected] = useState(options[0]);

  const [showDropdown, setShowDropdown] = useState(true);


  return (
    <div>
      <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
     {showDropdown ?
      <Dropdown
        selected={selected}
        onSelectedChange={setSelected}
        options={options}
      /> : null
     }
    </div>


  );
};

