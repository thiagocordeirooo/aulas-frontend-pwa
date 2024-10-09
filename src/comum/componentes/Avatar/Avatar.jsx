import './Avatar.css';

const Avatar = (props) => {
  const [primeiroNome, segundoNome] = props.nome.split(' ');

  return (
    <div className="avatar_root">
      {primeiroNome[0] + segundoNome[0]}
    </div>
  );
};

export default Avatar;
