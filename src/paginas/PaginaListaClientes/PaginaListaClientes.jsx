import { Link } from 'react-router-dom';
import Principal from '../../comum/componentes/Principal/Principal';
import ServicoCliente from '../../comum/servicos/ServicoCliente';

const PaginaListaClientes = () => {
  const servicoCliente = new ServicoCliente();
  const clientesDoLocalStorage = servicoCliente.listar();

  return (
    <Principal titulo="Lista de Clientes" voltarPara="/">
      <Link to="/cadastro-cliente">Novo</Link>

      <pre>
        {JSON.stringify(clientesDoLocalStorage, null, 2)}
      </pre>
    </Principal>
  );
};

export default PaginaListaClientes;
