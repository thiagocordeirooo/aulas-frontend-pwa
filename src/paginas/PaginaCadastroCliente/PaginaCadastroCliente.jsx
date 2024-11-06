import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import BotaoCustomizado from '../../comum/componentes/BotaoCustomizado/BotaoCustomizado';
import Principal from '../../comum/componentes/Principal/Principal';
import ServicoCliente from '../../comum/servicos/ServicoCliente';
import {
  formatarComMascara,
  MASCARA_CELULAR,
  MASCARA_CPF,
} from '../../comum/utils/mascaras';
import './PaginaCadastroCliente.css';

const instanciaServicoCliente = new ServicoCliente();

const PaginaCadastroCliente = () => {
  const navigate = useNavigate();
  const params = useParams();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [celular, setCelular] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [cpf, setCpf] = useState('');

  useEffect(() => {
    if (params.id) {
      const clienteEncontrado =
        instanciaServicoCliente.buscarPorId(params.id);
      if (clienteEncontrado) {
        setNome(clienteEncontrado.nome);
        setEmail(clienteEncontrado.email);
        setCelular(clienteEncontrado.celular);
        setDataNascimento(clienteEncontrado.dataNascimento);
        setCpf(clienteEncontrado.cpf);
      }
    }
  }, [params.id]);

  const salvar = () => {
    if (!nome || !email) {
      toast.error('Preencha todos os campos obrigatórios!');
      return;
    }
    const cliente = {
      id: params.id ? +params.id : Date.now(),
      nome,
      email,
      celular,
      dataNascimento,
      cpf,
    };
    if (params.id) {
      instanciaServicoCliente.editarCliente(cliente);
    } else {
      instanciaServicoCliente.cadastrarCliente(cliente);
    }
    navigate('/lista-clientes');
  };

  return (
    <Principal
      titulo={params.id ? 'Editar Cliente' : 'Novo Cliente'}
      voltarPara="/lista-clientes"
    >
      {params.id && (
        <div className="campo">
          <label>Id</label>
          <input type="text" value={params.id} disabled />
        </div>
      )}

      <div className="campo">
        <label>Nome</label>
        <input
          type="text"
          placeholder="Digite seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </div>

      <div className="campo">
        <label>Email</label>
        <input
          type="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="campo">
        <label>Celular</label>
        <input
          type="tel"
          placeholder="Digite o número do seu Whatsapp"
          value={celular}
          onChange={(e) =>
            setCelular(
              formatarComMascara(
                e.target.value,
                MASCARA_CELULAR
              )
            )
          }
        />
      </div>

      <div className="campo">
        <label>Data Nascimento</label>
        <input
          type="date"
          placeholder="Digite sua data de nascimento"
          value={dataNascimento}
          onChange={(e) =>
            setDataNascimento(e.target.value)
          }
        />
      </div>

      <div className="campo">
        <label>CPF</label>
        <input
          type="tel"
          placeholder="Digite seu CPF"
          value={cpf}
          onChange={(e) =>
            setCpf(
              formatarComMascara(
                e.target.value,
                MASCARA_CPF
              )
            )
          }
        />
      </div>
      <BotaoCustomizado cor="secundaria" aoClicar={salvar}>
        Salvar
      </BotaoCustomizado>
    </Principal>
  );
};

export default PaginaCadastroCliente;
