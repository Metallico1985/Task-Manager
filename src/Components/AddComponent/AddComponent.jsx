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


const handleTask = (e) => { setTask(e.target.value.toLowerCase()) }
const handlePrio = (e) => { setPriority(e.target.value) }
const handleSubmit = (e) => { e.preventDefault(); props.applyAdd(taskObj); document.getElementById("tarea").focus(); document.getElementById("tarea").value=(""); setTask("") };

  return (
    <div className='mainAdd'>
        <h1>Lista de tareas</h1>
       <form onSubmit={handleSubmit}>
                <input onChange={handleTask} required minLength={5} maxLength={20} id="tarea" type="text" name="tarea" placeholder="Descripción de la tarea" autoFocus  />
                <select onChange={handlePrio} name="prioridad" id="prioridad">
                    <option disabled selected>Prioridad</option>
                    <option value="baja">Baja</option>
                    <option value="media">Media</option>
                    <option value="alta">Alta</option>
                </select>
                <button type="submit" id="btnAdd">Agregar!</button>
            </form>
    </div>
  )
}

export default AddComponent