import { useState } from "react";
import { useDispatch } from "react-redux";
import { actionCreators } from "../store/actions";

function AddNewItem() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const inputchange = (event) => {
    return setInput(event.target.value);
  };

  const addItem = () => {
    dispatch(actionCreators.addToList(input));
    setInput("");
  };

  return (
    <>
      <div className="add-container">
        <input
          type="text"
          placeholder="Add item..."
          value={input}
          onChange={inputchange}
        />
        <button type="button" onClick={addItem} disabled={input.length < 1}>
          Add
        </button>
      </div>
    </>
  );
}

export default AddNewItem;
