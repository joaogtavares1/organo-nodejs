import './CampoTexto.css'
import { useState } from 'react';

const CampoTexto = (props) => {

   // let valor = ''

   

    const aoDigitar = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
       <div className="campo-texto">
        <label>
            {props.label}
        </label>
        <input value={props.valor} onChange={aoDigitar} required={props.obrigatorio} placeholder={`${props.placeholder}.`}/>
       </div>
    )
}

export default CampoTexto;