export function editName(text) {
  return {
    type: 'ALTER_NAME',
    payload: text,
  };
}

export function setList(lista) {
  return {
    type: 'LIST',
    payload: lista,
  };
}

export const editCharacter = character => async (dispatch, getState) => {
  const {list} = getState().hero;
  const newList = list.map(item => {
    if (item.id === character.id)
      return {
        ...item,
        name: character.name,
      };
    return item;
  });
  dispatch(setList(newList));
};
