import './Principal.css';

function Principal({ titulo, children }) {
  return (
    <main className="principal_root">
      <h1>{titulo}</h1>

      {children}
    </main>
  );
}

export default Principal;
