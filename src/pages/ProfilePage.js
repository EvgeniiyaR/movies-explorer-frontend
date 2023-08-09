import Header from '../components/Header/Header';
import Profile from '../components/Profile/Profile';

function ProfilePage({ isLoggedIn, setIsLoggedIn }) {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <Profile setIsLoggedIn={setIsLoggedIn} />
    </>
  );
}

export default ProfilePage;
