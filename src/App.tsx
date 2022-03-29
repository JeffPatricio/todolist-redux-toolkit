import { Fragment } from "react";
import { useSelector } from "react-redux";
import Main from "./Main";
import SignIn from "./SignIn";

function App() {
  const user = useSelector((state: any) => state.user);

  return (
    <Fragment>
      {!!user.authenticated && <Main />}
      {!user.authenticated && <SignIn />}
    </Fragment>
  );
}

export default App;
