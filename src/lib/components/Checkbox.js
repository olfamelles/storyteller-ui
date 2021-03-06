import React from 'react';

const Checkbox = (props) => (
  <div className='checkbox__container'>
    <div className="checkbox__round">
      <input
        disabled={props.disabled}
        checked={props.checked}
        type="checkbox"
        id={`checkbox__${props.id}`}/>
      <label htmlFor={`checkbox__${props.id}`}>{props.label}</label>
    </div>
  </div>
);

export default Checkbox;
