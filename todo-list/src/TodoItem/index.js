import React from 'react';
import './TodoItem.css';
/* import { TodoContext} from '../TodoContext'; */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons'; 

function TodoItem(props) {

  return (
    <li className="TodoItem">
       <span 
         className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}  
         onClick={props.onComplete}
         onClickChange={props.onChangeValue} //prueba
       >
        <FontAwesomeIcon icon={faCheck} />
      </span> 
      <p 
        className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>  
        {props.text}
        
      </p>
      <span 
          className="Icon  Icon-delete " 
          onClick={props.onDelete}
          >
        <FontAwesomeIcon icon={faXmark} />
      </span> 
    </li>
  );
}

export { TodoItem };