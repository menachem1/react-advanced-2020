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
              <h3>0 Birthdays Today</h3>
            ):(
              <h3>{3} Birthdays Today</h3>
            )}

            {
          rData.map((person) => {
              const {id, image, name, age} = person;
              return (
                  <div className='main_div' key={id} >
                      <img src={image} alt='face_image' />
                      <div className='h4'>
                        <h4>{name}</h4>
                        <h4 className='age'>{age}</h4>
                      </div>
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
