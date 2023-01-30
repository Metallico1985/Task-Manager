import React from 'react'
import { useState } from 'react'

function TaskList(props) {
    
    const [input, setInput] = useState("");
    const handleInput = (e) => { setInput(e.target.value) };

    return (
        <div className='mainList'>
            <h3>Tareas</h3>
            {/* <div id="mensaje-lista-vacia">Parece que no hay nada por aquí!</div> */}
            <ul id="lista-tareas">
                {props.lista.map((item) =>
                    <><div className='liContainer'><li onClick={() => props.delete(item)}
                        className={item.clase}
                        value={item}>{item.nombre}</li>
                        <button onClick={props.show}
                            className='btnEdit'>Edit</button>
                    </div>
                        <div className={props.act ? 'inputActive inputContainer' : 'inputInactive inputContainer'}>
                            < input onChange={handleInput} className="inputEdit" type="text" maxLength={20}/>

                            <button onClick={() => props.edit(input, item)} className='btnGuardar'>Guardar</button>
                        </div ></>
                )}
            </ul >
    </div>
  )
}

export default TaskList