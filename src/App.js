import "./App.css";
import NewUser from "./components/NewUser";
import Users from "./components/Users";
import UsersProvider from "./context/UsersContext";

function App() {
  return (
    <UsersProvider>
      <NewUser />
      <Users />
    </UsersProvider>
  );
}

export default App;
