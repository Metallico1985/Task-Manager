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
                    <><div className='liContainer'><li
                        className={item.clase}
                        value={item}>{item.nombre}</li>
                        <button onClick={props.show}
                            className='btnEdit'>Edit</button>
                        <button className='btnBorrar' onClick={()=>props.delete(item)}>Borrar</button>
                    </div>
                        <div className={props.act ? 'inputActive inputContainer' : 'inputInactive inputContainer'}>
                            < input onChange={handleInput} className="inputEdit" type="text" maxLength={25}/>

                            <button onClick={() => props.edit(input, item)} className='btnGuardar'>Guardar</button>
                        </div ></>
                )}
            </ul >
    </div>
  )
}

export default TaskList