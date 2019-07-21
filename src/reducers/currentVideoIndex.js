const currentIndex = (state = 0, action) => {
	switch (action.type) {
    case 'SET_CURRENT_INDEX':
      return action.currentIndex;
    default:
      return state;
  }
};

export default currentIndex;
