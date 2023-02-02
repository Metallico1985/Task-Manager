import React from 'react'
import { useState } from 'react'

function TaskList(props) {

    const [input, setInput] = useState("");
    const handleInput = (e) => { setInput(e.target.value) };

    return (
        <div className='mainList'>
            <h1>Tareas</h1>

            <ul id="lista-tareas">
                {props.lista.map((item) =>
                    <div key={item.id}>
                        <div className='liContainer'>
                            <li className={item.clase} value={item}>{item.nombre}</li>
                            <button onClick={() => props.show(item.id)} className='btnEdit'>Edit</button>
                            <button className='btnBorrar' onClick={() => props.delete(item)}>Borrar</button>
                        </div>
                        <div className={props.act == item.id ? 'inputActive inputContainer' : 'inputInactive inputContainer'}>
                            <input onChange={handleInput} name="inputEdit" id={`${item.id}`} className="inputEdit" type="text" maxLength={25} />

                            <button onClick={() => props.edit(input, item)} className='btnGuardar'>Guardar</button>
                        </div>
                    </div>
                )}
            </ul >
        </div>
    )
}

export default TaskList
