import Login from '../components/Login/Login';

function LoginPage({ setIsLoggedIn }) {
  return (
    <>
      <Login setIsLoggedIn={setIsLoggedIn} />
    </>
  );
}

export default LoginPage;
