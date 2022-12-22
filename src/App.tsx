import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserForm } from "./Components/UserForm";

const queryClient = new QueryClient();

function App() {
  return (
      <div className="App">
          <UserForm />
      </div>
  );
}

export default App;
