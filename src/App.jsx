import React from 'react'
import AddComponent from './Components/AddComponent/AddComponent'
import TaskList from './Components/TaskListComponent/TaskList'
import { useState } from 'react';

function App() {

    const [tarea, setTarea] = useState([]);
    const [active, setActive] = useState(false);

    const addTask = (nuevaTarea) => {

        if (nuevaTarea.prioridad === "baja") {
            nuevaTarea.clase = "prioridad-baja"
            setTarea([...tarea, nuevaTarea])

        }
        else if (nuevaTarea.prioridad === "media") {
            nuevaTarea.clase = "prioridad-media"
            setTarea([...tarea, nuevaTarea])
        }
        else if (nuevaTarea.prioridad === "alta") {
            nuevaTarea.clase = "prioridad-alta"
            setTarea([...tarea, nuevaTarea])
        }
        else {
            alert("Seleccionar tipo de prioridad")
        }
    }
    const deleteTask = (item) => {
        const newArray = tarea.filter(task => task.id !== item.id)
        setTarea(newArray)
    }

    const showInput = () => { setActive(!active) }

    const editTask = (nombre, item) => {
        const tareaCopia = [...tarea];
        tareaCopia.map((tarea) => {
            if (tarea.id === item.id) {
                tarea.nombre = nombre
            }

        })
        setTarea(tareaCopia);
        setActive(false);
    }
  return (
    <div className='mainApp'>
        <AddComponent applyAdd={addTask}/>
        <TaskList lista={tarea} delete={deleteTask} show={showInput} act={active} edit={editTask} />
        {console.log(tarea)}
    </div>
  )
}

export default App