import { Link } from 'react-router-dom';
import './AuthForm.css';
import Form from '../Form/Form';
import Button from '../Button/Button';
import logo from '../../images/logo.svg';

const AuthForm = ({ title, name, onSubmit, children, textButton, textLink, textParagraph, path, isLoginForm }) => {
  return (
    <section className="auth-form">
      <Link className="auth-form__link auth-form__link_type_logo" to="/"><img className="auth-form__logo" src={logo} alt="logo"></img></Link>
      <h1 className="auth-form__heading">{title}</h1>
      <Form className="auth-form__form" onSubmit={onSubmit} name={name}>
        {children}
        <div className={`auth-form__container ${isLoginForm ? "auth-form__container_type_login" : ""}`}>
          <Button className={`auth-form__button ${isLoginForm ? "auth-form__button_type_login" : ""}`} type="submit" text={textButton} />
          <p className="auth-form__text">{textParagraph} <Link className="auth-form__link" to={path}>{textLink}</Link></p>
        </div>
      </Form>
    </section>
  )
}

export default AuthForm;
