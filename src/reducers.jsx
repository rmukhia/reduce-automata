const reducers = (state = [], action) => {
  switch (action.type) {
    case 'A':
      return [
        ...state,
        {
          id: action.id,
        },
      ];
    default:
      return state;
  }
};

export default reducers;
