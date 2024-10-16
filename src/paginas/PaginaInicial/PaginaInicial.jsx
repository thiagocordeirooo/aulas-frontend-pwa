import { useNavigate } from 'react-router-dom';
import BotaoCustomizado from '../../comum/componentes/BotaoCustomizado/BotaoCustomizado';
import Principal from '../../comum/componentes/Principal/Principal';
import './PaginaInicial.css';

const PaginaInicial = () => {
  const navigate = useNavigate();

  return (
    <Principal titulo="Página Inicial">
      <BotaoCustomizado
        cor="primaria"
        aoClicar={() => navigate('/lista-produtos')}
      >
        Lista Produtos
      </BotaoCustomizado>

      <BotaoCustomizado
        cor="secundaria"
        aoClicar={() => navigate('/botao-contador')}
      >
        Botão Contador
      </BotaoCustomizado>

      <BotaoCustomizado
        aoClicar={() => navigate('/lista-tarefas')}
      >
        Lista de Tarefas
      </BotaoCustomizado>
    </Principal>
  );
};

export default PaginaInicial;
