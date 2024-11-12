import { useNavigate } from 'react-router-dom';
import BotaoCustomizado from '../../comum/componentes/BotaoCustomizado/BotaoCustomizado';
import Principal from '../../comum/componentes/Principal/Principal';
import ServicoAutenticacao from '../../comum/servicos/ServicoAutenticacao';

const instanciaServicoAutenticacao = new ServicoAutenticacao();

const PaginaMeuPerfil = () => {
  const navigate = useNavigate();
  const usuarioLogado = instanciaServicoAutenticacao.buscarUsuarioLogado();

  const sair = () => {
    instanciaServicoAutenticacao.sair();
    navigate('/login');
  };

  return (
    <Principal titulo="Meu Perfil" voltarPara="/">
      <div className="campo">
        <label>Nome</label>
        <input type="text" value={usuarioLogado.nome} disabled />
      </div>

      <div className="campo">
        <label>Email</label>
        <input type="text" value={usuarioLogado.email} disabled />
      </div>

      <BotaoCustomizado aoClicar={sair}>Sair</BotaoCustomizado>
    </Principal>
  );
};

export default PaginaMeuPerfil;
