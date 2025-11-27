import CardPesquisa from '../../Componente/card-pesquisa/card_pesquisa'
import {useState, useEffect} from 'react'
export default function Atendentes(){
    const [lista, setLista] = useState([])

    useEffect( async () =>{
        const resp = await fetch('http://localhost:8081/sw1b/rotas/atendente')
        const dados = resp.json()
        setLista(dados)
    })


    return(
        <div>
            <h1>Atendentes</h1>
            <CardPesquisa nome="Atendente"></CardPesquisa>
            <table className='table table-striped table-houver'>
                <thead>
                    <tr>
                        {lista.map((chave, valor) => {
                            <th>{chave} - {valor}</th>
                        })}
                    </tr>
                </thead>
                <tbody>
                    {lista.map((chave, valor) => {
                        <tr>
                            <td>{chave} - {valor}</td>
                            </tr>
                        })}
                </tbody>
            </table>
        </div>
    )
}