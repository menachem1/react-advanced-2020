import React from 'react';
import { useState } from 'react';
import './BirthdayReminder.css'
import { data } from './PeopleData';
// import People from './People';


function BirtdayReminder() {
  const [ rData, setRdata ] = useState(data);


  
  return <>
    <main>
      <section className='containe'>
        
        {/* <People /> */}
          
            {rData?.length === 0 ? (
              <h3>0 Birthdays</h3>
            ):(
              <h3>{3} Birthdays</h3>
            )}

            {
          rData.map((person) => {
              const {id, image, name, age} = person;
              return (
                  <div key={id} >
                      <img src={image} alt='face_image' />
                      <h4>{name}</h4>
                      <h4>{age}</h4>
                  </div>
                    )
                })
            }

      <button onClick={() => setRdata([])} className='botn' style={{background: '#f28ab2'}}>clear all</button>
      </section>
    </main>
  </>;
}

export default BirtdayReminder;
