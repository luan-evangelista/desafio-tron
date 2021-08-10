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
