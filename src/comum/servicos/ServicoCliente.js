class ServicoCliente {
  listar() {
    const clientesDoLocalStorage =
      localStorage.getItem('clientes');
    if (clientesDoLocalStorage) {
      return JSON.parse(clientesDoLocalStorage);
    }

    return [];
  }

  salvar(novoCliente) {
    const clientesDoLocalStorage = this.listar();
    clientesDoLocalStorage.push(novoCliente);
    localStorage.setItem(
      'clientes',
      JSON.stringify(clientesDoLocalStorage)
    );
  }
}

export default ServicoCliente;
