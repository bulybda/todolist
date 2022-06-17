import React, {useState} from 'react';
import './ToDoForm.module.css';

const ToDoForm = (props) => {
    const [task, setTask] = useState('');
    const [id, lastId] = useState(4)
    const addTask = (e) =>{
        e.preventDefault();
        const newTask = {text:task, id: id + 1, checked: false}
        lastId(id + 1)
        if(task !== ''){
            props.onSubmit(newTask)
            setTask('')
        }
    }
    return (
       <form>

           <input placeholder="Введите задание" className='myInput' type="text" value={task} onChange={e => setTask(e.target.value)}/>
           <button className='btnCreate' onClick={addTask}>
                Добавить
           </button>
       </form>
    );
};

export default ToDoForm;
