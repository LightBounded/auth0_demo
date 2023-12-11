import { useAuth0 } from "@auth0/auth0-react";

function AuthButton() {
  const { loginWithRedirect, isAuthenticated, isLoading, logout } = useAuth0();

  if (isLoading) return <div>Loading...</div>;  

  if (isAuthenticated) {
    return (
      <button
        onClick={() =>
          logout({
            logoutParams: {
              returnTo: window.location.origin,
            },
          })
        }
      >
        Log out
      </button>
    );
  }

  return <button onClick={() => loginWithRedirect()}>Log in</button>;
}

function App() {
  return (
    <>
      <AuthButton />
    </>
  );
}

export default App;
