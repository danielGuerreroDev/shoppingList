import "./App.css";
import AddNewItem from "./components/addNewItem";
import ItemList from "./components/itemList";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "./store/actions";

function App() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);

  const clearItems = () => {
    dispatch(actionCreators.clearItems());
  };

  const ClearItems = () => {
    return (
      <div className="clear-container">
        <p onClick={() => clearItems()}>Clear all</p>
      </div>
    );
  };

  return (
    <>
      {items.length > 0 && <ClearItems />}
      <h1>Shopping List</h1>
      <div className="main-container">
        <AddNewItem />
        <ItemList />
      </div>
    </>
  );
}

export default App;
