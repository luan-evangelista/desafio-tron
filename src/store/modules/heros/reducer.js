const initialState = {
  name: '',
  nickname: '',
  list: [],
  character: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ALTER_NAME':
      return {...state, name: action.payload};

    case 'ALTER_NICKNAME':
      return {...state, nickname: action.payload};

    case 'LIST':
      return {...state, list: action.payload};

    default:
      return state;
  }
};
