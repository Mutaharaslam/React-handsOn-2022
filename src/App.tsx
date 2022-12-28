import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserForm } from "./Components/UserForm";
import { About } from "./Components/About";

const queryClient = new QueryClient();

function App() {
  return (
      <div className="App">
          <UserForm />
          <About />
      </div>
  );
}

export default App;
