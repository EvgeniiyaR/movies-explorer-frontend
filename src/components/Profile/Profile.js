import { useNavigate } from 'react-router-dom';
import './Profile.css';
import Form from '../Form/Form';
import Input from '../Input/Input';
import Button from '../Button/Button';

const Profile = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const handleSubmitEdit = () => {};
  const handleSubmitLogout = () => {
    setIsLoggedIn(false);
    navigate('/', {replace: true});
  };

  return (
    <section className="profile">
      <h1 className="profile__welcome">Привет, Евгения!</h1>
      <Form className="profile__form" name="profile" onSubmit={handleSubmitEdit}>
        <div className="profile__container-inputs">
          <Input
            classNameInput="profile__input"
            classNameLabel="profile__label profile__label_type_name"
            type="text"
            name="profile-name"
            placeholder="Имя"
            label="Имя"
            value="Евгения" />
          <Input
            classNameInput="profile__input"
            classNameLabel="profile__label profile__label_type_email"
            type="email"
            name="profile-email"
            placeholder="E-mail"
            label="E-mail"
            value="pochta@yandex.ru" />
        </div>
        <div className="profile__container-btns">
          <Button className="profile__button profile__button_type_edit" type="submit" text="Редактировать" />
          <Button className="profile__button profile__button_type_logout" type="button" text="Выйти из аккаунта" onClick={handleSubmitLogout}/>
        </div>
      </Form>
    </section>
  )
}

export default Profile;
