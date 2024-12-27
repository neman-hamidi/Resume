import { useRoutes } from "react-router-dom";
import route from "./Routes"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"
function App() {
  const routes = useRoutes(route)
  return (
    <div className="App">
      {routes}
    </div>
  );
}

export default App;
