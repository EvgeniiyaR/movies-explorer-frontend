import Form from '../Form/Form';
import Input from '../Input/Input';
import Button from '../Button/Button';

const Profile = () => {
  const handleSubmitEdit = () => {}

  return (
    <>
      <h1>Привет, Евгения</h1>
      <Form className="profile__form" name="profile" onSubmit={handleSubmitEdit}>
        <Input classNameInput="profile__input" type="text" />
        <Input classNameInput="profile__input" type="email" />
        <Button className="profile__button-edit" type="submit" />
        <Button className="profile__button-logout" type="button" />
      </Form>
    </>
  )
}

export default Profile;
