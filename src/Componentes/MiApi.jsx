import React, { useState, useEffect } from 'react'

const MiApi = ({ buscador, ordenar }) => {
    const [feriados, setFeriados] = useState([]);
    const [cargado, setCargado] = useState(false);




    useEffect(() => {
        //effect
        getFeriados();

    }, [cargado]);

    useEffect(() => {

        ordenando();

    }, [ordenar]);

    async function getFeriados() {
        const res = await fetch("https://api.victorsanmartin.com/feriados/en.json");
        const data = await res.json();
        console.log(data)
        setCargado(true)
        setFeriados([...data.data])
    }

    function ordenando() {
        const nuevoOrdenado = feriados.sort((a, b) =>
            a.title.toLowerCase().localeCompare(b.title.toLowerCase()))
        setFeriados([...nuevoOrdenado])
    }


    return (
        cargado ?
            <div>
                <h1>Feriados</h1>
                <div className='container grilla'>
                    <div className="row border-bottom border-dark mb-2 pb-2" >
                        <div className="col-2" >
                            <strong>FECHA</strong>
                        </div>
                        <div className="col">
                        <strong>DESCRIPCIÓN</strong>
                        </div>
                        <div className="col">
                        <strong>TIPO DE FERIADO</strong>
                        </div>
                    </div>
                </div>

                {feriados.filter((f) => {
                    if (buscador === '') {
                        return feriados.map((f) =>
                        (
                            <div className='container grilla' key={f.date}>
                                <div className="row border-bottom border-dark mb-2 pb-2" >
                                    <div className="col-2" >
                                        {f.date}
                                    </div>
                                    <div className="col">
                                        {f.title}
                                    </div>
                                    <div className="col">
                                        {f.extra}
                                    </div>
                                </div>
                            </div>
                        )
                        )
                    } else if (f.extra.toLowerCase().includes(buscador.toLowerCase())) { return f }
                }).map((f) =>
                (
                    <div className='container grilla' key={f.date}>
                        <div className="row border-bottom border-dark mb-2 pb-2">
                            <div className="col-2" >
                                {f.date}
                            </div>
                            <div className="col">
                                {f.title}
                            </div>
                            <div className="col">
                                {f.extra}
                            </div>
                        </div>
                    </div>
                ))}
            </div> :
            <h1>Cargando datos</h1>

    )
} // final funcion
export default MiApi



