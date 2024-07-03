import './styles.css';
function Input_btn({ name, type, placeholder, label }) {
  return (
    <div className='fields-input'>
      {label && <label htmlFor={name}>{label}</label>}
      <input name={name} type={type} placeholder={placeholder} id={name} />
    </div>
  );
}

export default Input_btn;
