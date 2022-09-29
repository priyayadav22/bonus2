import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import ListCom from './ListCom';
import task from '../images/task.jpg'
const ToDoList = () => {
    const [item, setItem] = useState("");
    const [newitem, setNewItem] = useState([]);
    const itemEvent = (event) => {
        setItem(event.target.value);
    }
    const listOfItems = () => {
        setNewItem((prevValue) => {
            return [...prevValue, item];
        });
        setItem("");
    };
    return (
        <>
            <div className='main_div'>
                <div className='image'>
                    <img src={task} alt />
                </div>
                <div className='container' >
                    <div className='center_div'>
                        <br />
                        <h1>ToDo List</h1>
                        <br />
                        <div className='box'>
                            <input type='text' value={item} placeholder="Add a item" onChange={itemEvent} />
                            <Button className='newBtn' onClick={listOfItems}>
                                <FontAwesomeIcon className='icon' icon={faPlus} />
                            </Button>
                        </div>
                        <br />
                        <ol>
                            {newitem.map((val) => {
                                return <ListCom key={val} text={val} />;
                            })}
                        </ol>
                    </div>
                </div>
            </div>
        </>
    )
};

export default ToDoList;