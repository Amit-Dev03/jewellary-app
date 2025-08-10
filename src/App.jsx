import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body/Body";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import JewelryFooter from "./components/Footer";
function App() {
  return (
    <div className="m-0 p-0">
      <Provider store={appStore}>
        <Header />
        <Outlet />
        <JewelryFooter />
      </Provider>
    </div>
  );
}

export default App;
