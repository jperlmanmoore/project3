import React from 'react';
import "./LoginForm.css"

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (

    <button {...props}  className='btn bg-warning text-dark'>


      {props.children}
    </button>
  );
}
// up to date