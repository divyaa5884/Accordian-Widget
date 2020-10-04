import React from 'react';
import './App.css';
import Accordian from './components/Accordian';

const App = () => {
  const items = [
    {
      title: 'What is React?',
      content: `React is a front-end JavaScript library developed by Facebook in 2011. It follows the
        component based approach which helps in building reusable UI components.`
    },
    {
      title: 'What are the features of React? ',
      content: `It uses the virtual DOM instead of the real DOM.
        It uses server-side rendering.`
    },
    {
      title: 'What are the limitations of React?',
      content: `React is just a library, not a full-blown framework
        Its library is very large and takes time to understand`
    },
    {
      title: 'What is JSX?',
      content: `JSX is a shorthand for JavaScript XML. This is a type of file used by React which utilizes
       the expressiveness of JavaScript along with HTML like template syntax.
       This makes the HTML file really easy to understand.
       This file makes applications robust and boosts its performance. Below is an example of JSX`
    },
  ]
  return (
    <div>
        <Accordian items = {items} />
    </div>
  )
}

export default App;
