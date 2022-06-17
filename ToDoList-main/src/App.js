
import React, {useState, useMemo} from "react";
import './App.css';
import ToDoForm from "./Components/ToDoForm";
import Task from "./Components/Task";

function App() {
    const [tasks, setTasks] = useState([
        {id:1, text:'Родись', checked:true},
        {id:2, text:'Страдай', checked:false},
        {id:3, text:'Умри', checked:false},
        {id:4, text:'И в рай', checked:false},
    ])
    const all = 'All'
    const done = 'Done'
    const notDone = 'NotDone'
    //const [filteredTasks, setFilteredTasks] = useState(tasks)
    const [filter, setFilter] = useState(all)
    const addTask = (newTask) => {
   //     console.log(newTask)
        setTasks([...tasks, newTask])

    }
    const deleteTask = (task) => {
        setTasks(tasks.filter(p => p.id !== task.id))
    }
    const filterByDone = () => {
        setFilter(done)
    }
    const filterByNoDone = () => {
        setFilter(notDone)
    }
    const filterByAll = () => {
        setFilter(all)
    }
    const doneCounter = () =>{
        let i = 0
        tasks.forEach(function(task){
            if(task.checked){
                i += 1
            }
        })
        return i
    }
    const unDoneCounter = () =>{
        let i = 0
        tasks.forEach(function(task){
            if(!task.checked){
                i += 1
            }
        })
        return i
    }
    const doneTask = (task) => {

            setTasks((tasks) => {
                    return [
                        ...tasks.slice(0,task.id - 1),
                        {id: task.id, text: task.text, checked: !task.checked},
                        ...tasks.slice(task.id)
                    ];
                }
            );

    }
    const filteredTasks = useMemo(() => {
        if(filter === all){
            return tasks
        }else if (filter === done) {
            return tasks.filter(p => p.checked)
        }else if (filter === notDone){
            return tasks.filter(p => !p.checked)
        }
    }, [tasks, filter]);
  return (
    <div className="App">
      <h1 textAlign="center">Список дел</h1>
      <ToDoForm onSubmit={addTask}></ToDoForm>
        {
            filteredTasks.map(task => <Task delete={deleteTask} task={task} key={task.id} onDone={doneTask} />)
        }

      <div className="sort">
          <button onClick={filterByDone}>Сделано ({doneCounter()})</button>
          <button onClick={filterByNoDone}>Не сделано ({unDoneCounter()})</button>
          <button onClick={filterByAll}>Все</button>
      </div>
    </div>
  );
}

export default App;
