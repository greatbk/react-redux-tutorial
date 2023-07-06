import Todos from "./components/Todos";
import { Provider } from "react-redux";
import CounterContainer from "./containers/CounterContainer";
import { useStore } from "./store/useStore";

function App() {
  const store = useStore();
  return (
    <Provider store={store}>
      <div>
        <CounterContainer number={0} />
        <hr />
        <Todos />
      </div>
    </Provider>
  );
}

export default App;
