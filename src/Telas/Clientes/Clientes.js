import {useState, useEffect} from 'react'
export default function Clientes(){
    const [listaClientes, setListaClientes] = useState([])

    useEffect(async () =>{
        const url =`http://192.168.130.130:8081/sw1b/rotas/clientes`
        await fetch(url)
        .then((resp)=>resp.json())
        .then((dados) =>{
            setListaClientes(dados)
        })
    })
    return(<div>
        <h1>Clientes</h1>
       
        <table className='table table-hover table-striped'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Telefone</th>
                </tr>
            </thead>
            <tbody>
                {listaClientes.map( (item) =>{
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.nome}</td>
                        <td>{item.telefone}</td>
                        <td>
                            <button className='btn btn-warning'>Editar</button>
                            <button className='btn btn-danger'>Excluir</button>
                        </td>
                    </tr>
                })}
            </tbody>
        </table>   
    </div>)
}