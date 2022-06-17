import React from 'react';

const Task = (props) => {

    const checkboxClick = () => {

        props.onDone(props.task)
    }
    return (
        <div>
            <div className={props.task.checked ? "task-done" : "task"}>
                <input
                    type="Checkbox"
                    defaultChecked={props.task.checked ? true : false}
                    onChange={checkboxClick}
                />
                {props.task.text}
                <button onClick={() => props.delete(props.task)}>
                    Удалить
                </button>
            </div>
        </div>
    );
};

export default Task;
