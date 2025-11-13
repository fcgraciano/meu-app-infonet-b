export default function CardPesquisa({nome}){
    return(
        <div className="card">
            <div className="card-header">
                Pesquisar {nome}
            </div>
            <div className="card-body">
                <div className="row mt-3">
                    <div className="col-3">
                        <button className="btn btn-success">
                            Novo {nome}
                        </button>
                    </div>
                    <div className="col-8">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Digite sua pesquisa aqui..."/>
                            <button className="btn btn-primary" >
                                Pesquisar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}