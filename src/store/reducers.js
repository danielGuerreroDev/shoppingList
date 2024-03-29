const initialState = {
  items: [],
};

const updateItem = (array, action) => {
  return array.map((item, index) => {
    if (index !== action.payload) {
      return item;
    }

    return {
      ...item,
      inBasket: true,
    };
  });
};

const removeItem = (array, action) => {
  return array.map((item, index) => {
    if (index !== action.payload) {
      return item;
    }

    return {
      ...item,
      inBasket: false,
    };
  });
};

const deleteItem = (array, action) => {
  return array.filter((item, index) => index !== action.payload);
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_LIST":
      return {
        ...state,
        items: [
          ...state.items,
          {
            value: action.payload,
            inBasket: false,
          },
        ],
      };
    case "ADD_TO_BASKET":
      return {
        ...state,
        items: updateItem(state.items, action),
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        items: removeItem(state.items, action),
      };
    case "DELETE_ITEM":
      return {
        ...state,
        items: deleteItem(state.items, action),
      };
    case "CLEAR_ITEMS":
      return {
        items: [],
      };
    default:
      return state;
  }
}
