const messageReducer = (state, action) => {
    switch (action.type) {
      case "SORT":
        return { ...state, sort: action.payload };
      case "SORT_BY_PRIORITY":
        return { ...state, category: action.payload, sort: false };
      case "SORT_BY_UNREAD":
        return {  meal_type:"", sort:false };
      case "CLEAR_FILTERS":
        return {
          delivery_cost: "",
          searchQuery: "",
          sort:false,
          category:false,
          search:""
        };
      default:
        return state;
    }
  };
 
  export { messageReducer }