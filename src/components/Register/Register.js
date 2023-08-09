import AuthForm from '../AuthForm/AuthForm';
import Input from '../Input/Input';

const Register = () => {
  const handleRegister = () => {};

  return (
    <AuthForm
      title="Добро пожаловать!"
      name="auth-reg"
      onSubmit={handleRegister}
      textButton="Зарегистрироваться"
      textParagraph="Уже зарегистрированы?"
      textLink="Войти"
      path="/signin">
      <Input
        classNameInput="auth-form__input"
        classNameLabel="auth-form__label"
        type="text"
        name="auth-name"
        placeholder="Имя"
        label="Имя"
        required="required"
        max="30"
        min="2"
        value="Евгения">
        <span class="auth-form__input-error"></span>
      </Input>
    </AuthForm>
  )
}

export default Register;
