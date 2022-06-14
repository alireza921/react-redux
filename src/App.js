import "./App.css";
import { Provider } from "react-redux/";
import CakeContainer from "./components/cakeComponent";
import store from "./redux/store";
function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        App Cmp
        <CakeContainer />
      </div>
    </Provider>
  );
}

export default App;
