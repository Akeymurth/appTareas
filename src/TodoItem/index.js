import React from 'react';
import './TodoItem.css';
import { FiCheckCircle, FiX } from "react-icons/fi";

//este seria el url para los iconos  https://react-icons.github.io/react-icons/, explican como instalr y poner los iconos

function TodoItem(props) {

  return (
    <li className='TodoItem'>
      <span 
      className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
      onClick={props.onComplete}
      >
      <FiCheckCircle className=''/>
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--completed'}`}>
        {props.text}
      </p>
      <span 
      className='Icon Icon-delete'
      onClick={props.onDelete}
      >
      <FiX className='closeX'/>
      </span>
    </li>
  );
}

export { TodoItem };