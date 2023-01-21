const Buscador = ({setBuscador, setOrdenar}) => {

   // const url='';
    const width = {width:'100%'}
    
    return (
        <div style={ width } className='mb-4'>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid justify-content-between">
                    <h2 className="navbar-brand barra">BUSCADOR POR TIPO DE FERIADO</h2>
                   <div className="d-flex">
                   <form className="d-flex" role="search"> 
                         <input className="form-control me-2" type="search" placeholder="Buscador" aria-label="Buscador"
                            onChange={(e) => setBuscador(e.target.value)} />
                    </form>
                    <button className="btn btn-info" onClick={() => {
                    setOrdenar(true)
                    }}
                    >Ordenar por nombre A-Z</button>
                   </div>
                   
                </div>
            </nav>
        </div>
    )
}

export default Buscador