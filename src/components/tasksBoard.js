import React, { useEffect, useRef, useState } from "react";
import { addTask, removeTask } from "../redux";
import { connect } from "react-redux";

const TaskBoard = (props) => {
    const inputRef=useRef(null)
    const [text, setText] = useState("");

    useEffect(()=>{
        inputRef.current.focus()
    },[])

    const inputTextHandler = (event) => {
        setText(event.target.value);
    };

    
    const submitTask = () => {
        if (text.trim() !== "") {
            props.addTask({ id: Date.now(), text });
            setText("");
        }
        
    };

    const deleteTask = (taskId) => {
        props.removeTask(taskId);
    };

    
    return (
        <div>
        <input type="text" value={text} ref={inputRef} onChange={inputTextHandler} />
        <button onClick={submitTask}>Submit</button>
        <ul>
            {props.tasks.map((task) => (
            <li key={task.id}>
                {task.text}
                <button onClick={() => deleteTask(task.id)}>Delete</button>
            </li>
            ))}
        </ul>
        </div>
    );

};

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (task) => dispatch(addTask(task)),
    removeTask: (taskId) => dispatch(removeTask(taskId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskBoard);
