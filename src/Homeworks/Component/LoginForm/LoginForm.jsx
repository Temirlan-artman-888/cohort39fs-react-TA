import Input from '../Input/Input';
import Button from '../Button/Button';
import './styles.css';
function LoginForm() {
  return (
    <form className='loginForm-style'>
      <Input name="username" type="text" placeholder="Enter your username" label="Username:" />
      <Input name="password" type="password" placeholder="Enter your password" label="Password:" />
      <Button name="Login" type="submit" />
    </form>
  );
}

export default LoginForm;
