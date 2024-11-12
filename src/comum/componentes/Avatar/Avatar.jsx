import './Avatar.css';

const Avatar = (props) => {
  const [primeiroNome, segundoNome] = props.nome.split(' ');

  const iniciais = segundoNome ? primeiroNome[0] + segundoNome[0] : primeiroNome[0];

  return <div className="avatar_root">{iniciais}</div>;
};

export default Avatar;
