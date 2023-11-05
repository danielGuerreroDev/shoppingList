import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../store/actions";

function ItemList() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);

  const addItemToBasket = (index) => {
    dispatch(actionCreators.addToBasket(index));
  };

  const removeItemFromBasket = (index) => {
    dispatch(actionCreators.removeItem(index));
  };

  const deleteItem = (index) => {
    dispatch(actionCreators.deleteItem(index));
  };

  const showItems = items.map((item, index) => {
    return (
      <div
        className={`item-container ${item.inBasket && `highlight`}`}
        key={index}
      >
        <input
          type="checkbox"
          checked={item.inBasket}
          onChange={() =>
            item.inBasket ? removeItemFromBasket(index) : addItemToBasket(index)
          }
          name={item.value}
          id={item.value + index}
          value={item.value}
        />
        <label htmlFor={item.value}>{item.value}</label>
        <button onClick={() => deleteItem(index)}>X</button>
      </div>
    );
  });

  return <>{showItems}</>;
}

export default ItemList;
