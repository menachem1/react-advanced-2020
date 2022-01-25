import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

const checkSize = () => {
  setSize(window.innerWidth)
}  

useEffect(() => {
  console.log('useEffect');
  window.addEventListener('resize', checkSize);

  // cleanup function: in this case i am able to use
  // the second perameter but it is good practice becose
  // it will come in handy
  
  // return () => {
  //   console.log('cleanup');
  //   window.removeEventListener('resize', checkSize);
  // };

}, []);

console.log('render');

return <>
  <h1>window</h1>
  <h2>{size} PX</h2>
  </>;
};

export default UseEffectCleanup;
