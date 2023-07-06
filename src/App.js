import Counter from "./components/Counter";
import Todos from "./components/Todos";
import { useStore } from "./store/useStore";
import { Provider } from "react-redux";

function App() {
  const store = useStore();
  return (
    <Provider store={store}>
      <div>
        <Counter number={0} />
        <hr />
        <Todos />
      </div>
    </Provider>
  );
}

export default App;
