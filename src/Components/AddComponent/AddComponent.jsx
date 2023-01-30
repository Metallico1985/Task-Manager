import React from 'react'
import './AddComponent.css'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

function AddComponent(props) {

    const [task, setTask] = useState("");
    const [priority, setPriority] = useState("");


    const taskObj = {
        nombre: task,
        prioridad: priority,
        clase: "",
        id: uuidv4()
    }


const handleTask = (e) => { setTask(e.target.value) }
const handlePrio = (e) => { setPriority(e.target.value) }
const handleSubmit = (e) => { e.preventDefault(); props.applyAdd(taskObj) };

  return (
    <div className='mainAdd'>
        <h1>Task Manager</h1>
       <form onSubmit={handleSubmit}>
                <input onChange={handleTask} maxLength={20} id="tarea" type="text" name="tarea" placeholder="Descripción de la tarea" />
                <select onChange={handlePrio} name="prioridad" id="prioridad">
                    <option disabled selected>Prioridad</option>
                    <option value="baja">baja</option>
                    <option value="media">media</option>
                    <option value="alta">alta</option>
                </select>
                <button type="submit" id="agregar">Agregar!</button>
            </form>
    </div>
  )
}

export default AddComponent