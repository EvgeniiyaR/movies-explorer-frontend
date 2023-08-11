import AuthForm from '../AuthForm/AuthForm';

const Login = ({ setIsLoggedIn }) => {
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <AuthForm
      title="Рады видеть!"
      name="auth-log"
      onSubmit={handleLogin}
      textButton="Войти"
      textParagraph="Ещё не зарегистрированы?"
      textLink="Регистрация"
      path="/signup"
      isLoginForm={true}>
    </AuthForm>
  )
}

export default Login;
