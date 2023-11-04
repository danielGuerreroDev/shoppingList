import "./App.css";
import AddNewItem from "./components/addNewItem";
import ItemList from "./components/itemList";

function App() {
  return (
    <>
      <div className="clear-container">
        <p>Clear all</p>
      </div>
      <h1>Shopping List</h1>
      <div className="main-container">
        <AddNewItem />
        <ItemList />
      </div>
    </>
  );
}

export default App;
