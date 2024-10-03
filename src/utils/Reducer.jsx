const messageReducer = (state, action) => {
    switch (action.type) {
      case "SORT":
        return { ...state, sort: action.payload };
      case "SORT_BY_PRIORITY":
        return { ...state, sort: action.payload};
      case "SORT_BY_UNREAD":
        return {  ...state, sort:action.payload };
      case "CLEAR_FILTERS":
        return {
          sort:false,
        };
      default:
        return state;
    }
  };
 
  export { messageReducer }