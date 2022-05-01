import Counter from "./components/counter";
import { Provider } from 'react-redux'
import store from "./redux/store";
import User from "./components/user";

function App() {
  return (
    <Provider store={store}>
        <Counter />
        <User />
    </Provider>
  );
}

export default App;
