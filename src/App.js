import { Provider } from "react-redux";
import CounterContainer from "./containers/CounterContainer";
import { useStore } from "./store/useStore";
import TodosContainer from "./containers/TodosContainer";

function App() {
  const store = useStore();
  return (
    <Provider store={store}>
      <div>
        <CounterContainer number={0} />
        <hr />
        <TodosContainer />
      </div>
    </Provider>
  );
}

export default App;
