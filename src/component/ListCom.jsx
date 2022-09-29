import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
const ListCom = (props) => {
    const [line, setLine] = useState(false);
    const cutIt = () => {
        setLine(true);
    };

    return (
        <div className='todo_style'>
            <span className="span" style={{marginRight: '10px' }} onClick={cutIt}><FontAwesomeIcon icon={faTrash} className='deleteIcon' /> </span>
            <li style={{ textDecoration: line ? "line-through" : "none" }}>{props.text}</li>
        </div>

    )
};

export default ListCom;