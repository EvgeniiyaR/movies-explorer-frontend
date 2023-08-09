import Header from '../components/Header/Header';
import Profile from '../components/Profile/Profile';

function ProfilePage({ isLoggedIn }) {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <Profile />
    </>
  );
}

export default ProfilePage;
