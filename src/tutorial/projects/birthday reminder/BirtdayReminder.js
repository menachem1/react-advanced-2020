import React from 'react';
import { useState } from 'react';
import './BirthdayReminder.css'
import { data } from './PeopleData';
import People from './People';


function BirtdayReminder() {
  const [ rData, setRdata ] = useState(data);

  
  return <>
    <main>
      <section className='containe'>
        <h3>5 birthdays today</h3>
        <People />
      <button onClick={() => setRdata([])} className='botn' style={{background: '#f28ab2'}}>clear all</button>
      </section>
    </main>
  </>;
}

export default BirtdayReminder;
