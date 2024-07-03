import "./styles.css";
function Button({ name, type }) {
  return (
    <div className="btn-style">
      <button className="login-btn" type={type}>{name}</button>
    </div>
  );
}

export default Button;
