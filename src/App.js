import "./App.css";
import { Provider } from "react-redux/";
import CakeContainer from "./components/cakeComponent";
import store from "./redux/store";
import IcecreamComponenet from "./components/icecreamComponent";
import UserContainer from "./components/userComponent";
function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        App Cmp
        <CakeContainer />
        <IcecreamComponenet />
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
