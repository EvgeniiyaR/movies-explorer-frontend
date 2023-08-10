import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';
import Form from '../Form/Form';
import Input from '../Input/Input';
import Button from '../Button/Button';

const Profile = ({ setIsLoggedIn }) => {
  const [isEdit, setIsEdit] = useState(false);
  const navigate = useNavigate();

  const handleSubmitEdit = (e) => {
    e.preventDefault();
    setIsEdit(true);
  };

  const handleSubmitSave = (e) => {
    e.preventDefault();
    setIsEdit(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/', {replace: true});
  };

  return (
    <section className="profile">
      <h1 className="profile__welcome">Привет, Евгения!</h1>
      <Form className="profile__form" name="profile" onSubmit={isEdit ? handleSubmitSave : handleSubmitEdit}>
        <div className="profile__container-inputs">
          <Input
            classNameInput="profile__input"
            classNameLabel="profile__label profile__label_type_name"
            type="text"
            name="profile-name"
            placeholder="Имя"
            label="Имя"
            value="Евгения"
            disabled={!isEdit && "disabled"} />
          <Input
            classNameInput="profile__input"
            classNameLabel="profile__label profile__label_type_email"
            type="email"
            name="profile-email"
            placeholder="E-mail"
            label="E-mail"
            value="pochta@yandex.ru"
            disabled={!isEdit && "disabled"} />
        </div>
        <div className="profile__container-btns">
          {isEdit ?
            <>
              <Button className="profile__button profile__button_type_save" type="submit" text="Сохранить" />
            </>
            :
            <>
              <Button className="profile__button profile__button_type_edit" type="submit" text="Редактировать" />
              <Button className="profile__button profile__button_type_logout" type="button" text="Выйти из аккаунта" onClick={handleLogout} />
            </>
          }
        </div>
      </Form>
    </section>
  )
}

export default Profile;
