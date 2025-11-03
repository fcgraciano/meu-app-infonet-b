export default function Servicos(){
    return (
        <div>
            <h1>Serviços</h1>
            <form>
                <h1>Cadastro de um novo serviço</h1>
                <input type="text" className="" name=""/>
                <br/>
                <button >Salvar</button>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Serviço</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Manicure</td>
                        <td>
                            <button>Editar</button>
                            <button>Excluir</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}