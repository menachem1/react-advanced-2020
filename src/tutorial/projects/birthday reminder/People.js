import React from 'react';
import { data } from './PeopleData';
import './People.css'

function People() {
  return <>
  {
      data.map((person) => {
          const {id, image, name, age} = person;
          return (
              <div key={id} >
                  <img src={image} />
                  <h4>{name}</h4>
                  <h4>{age}</h4>
              </div>
          )
      })
  }
  </>;
}

export default People;
