import { useState } from 'react';
import BotaoCustomizado from '../../comum/componentes/BotaoCustomizado/BotaoCustomizado';
import Principal from '../../comum/componentes/Principal/Principal';

const PaginaListaTarefas = () => {
  const [descricao, setDescricao] = useState('');
  const [tarefas, setTarefas] = useState([]);

  const adicionarNaLista = () => {
    setTarefas([...tarefas, descricao]);
    setDescricao('');
  };

  return (
    <Principal titulo="Lista de Tarefas" voltarPara="/">
      <div>
        <input
          type="text"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        />
        <BotaoCustomizado aoClicar={adicionarNaLista}>
          +
        </BotaoCustomizado>
      </div>
      <ul>
        {tarefas.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </Principal>
  );
};

export default PaginaListaTarefas;
