import ServicoUsuarios from './ServicoUsuarios';

const instanciaServicoUsuarios = new ServicoUsuarios();

class ServicoAutenticacao {
  login(email, senha) {
    const usuariosDoLocalStorage = instanciaServicoUsuarios.listar();

    const usuarioLogado = usuariosDoLocalStorage.find((u) => u.email === email && u.senha === senha);

    if (usuarioLogado) {
      localStorage.setItem('usuario-logado', JSON.stringify(usuarioLogado));
    }

    return usuarioLogado;
  }

  usuarioEstaLogado() {
    const usuarioLogado = localStorage.getItem('usuario-logado');
    if (usuarioLogado) {
      return true;
    }

    return false;
  }
}

export default ServicoAutenticacao;
