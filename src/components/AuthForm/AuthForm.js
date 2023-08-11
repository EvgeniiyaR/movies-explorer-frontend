import { Link } from 'react-router-dom';
import './AuthForm.css';
import Form from '../Form/Form';
import Button from '../Button/Button';
import Input from '../Input/Input';
import logo from '../../images/logo.svg';

const AuthForm = ({ title, name, onSubmit, children, textButton, textLink, textParagraph, path, isLoginForm }) => {
  const handleChange = () => {};

  return (
    <section className="auth-form">
      <Link className="auth-form__link auth-form__link_type_logo" to="/"><img className="auth-form__logo" src={logo} alt="logo"></img></Link>
      <h1 className="auth-form__heading">{title}</h1>
      <Form className="auth-form__form" onSubmit={onSubmit} name={name}>
        {children}
        <Input
          classNameInput="auth-form__input auth-form__input_type_error"
          classNameLabel="auth-form__label"
          type="email"
          name="auth-email"
          placeholder="E-mail"
          required="required"
          label="E-mail"
          defaultValue="pochta@yandex.ru"
          onChange={handleChange}>
          <span className="auth-form__input-error">Что-то пошло не так...</span>
        </Input>
        <Input
          classNameInput="auth-form__input auth-form__input_type_error"
          classNameLabel="auth-form__label"
          type="password"
          name="auth-password"
          placeholder="Пароль"
          required="required"
          label="Пароль"
          defaultValue="123456"
          onChange={handleChange}>
          <span className="auth-form__input-error">Что-то пошло не так...</span>
        </Input>
        <div className={`auth-form__container ${isLoginForm ? "auth-form__container_type_login" : ""}`}>
          <Button className="auth-form__button" type="submit" text={textButton} />
          <p className="auth-form__text">{textParagraph} <Link className="auth-form__link" to={path}>{textLink}</Link></p>
        </div>
      </Form>
    </section>
  )
}

export default AuthForm;
