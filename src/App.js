import React from 'react';
import Accordion from './components/Accordion';



const items = [

  {
    title: 'what is react',
    content: 'React is a front end javascript framework'

  },
  {
    title: 'why use React?',
    content : 'React is a favorite JS library among engineers.'

  },
  {
    title: 'how do you use React ?',
    content : "you use React by creating components"
  }
]
export default () => {
  return (
    <div>
      <Accordion items={items}  />
    </div>


  );
};

