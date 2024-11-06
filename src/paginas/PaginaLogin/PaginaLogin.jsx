import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import BotaoCustomizado from '../../comum/componentes/BotaoCustomizado/BotaoCustomizado';
import Principal from '../../comum/componentes/Principal/Principal';
import ServicoAutenticacao from '../../comum/servicos/ServicoAutenticacao';

const instanciaServicoAutenticacao = new ServicoAutenticacao();

const PaginaLogin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const entrar = () => {
    if (!email || !senha) {
      toast.error('Preencha todos os campos.');
      return;
    }

    const usuarioLogado = instanciaServicoAutenticacao.login(email, senha);
    if (usuarioLogado) {
      navigate('/');
    } else {
      toast.error('Usuário ou senha inválida.');
    }
  };

  return (
    <Principal titulo="Entrar">
      <div className="campo">
        <label>Email</label>
        <input type="email" placeholder="Digite seu email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>

      <div className="campo">
        <label>Senha</label>
        <input
          type="password"
          placeholder="Digite uma senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
      </div>

      <BotaoCustomizado cor="secundaria" aoClicar={entrar}>
        Entrar
      </BotaoCustomizado>
      <Link to="/novo-usuario">Ainda não tem conta?</Link>
    </Principal>
  );
};

export default PaginaLogin;
