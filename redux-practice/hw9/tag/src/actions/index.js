export const addTag = text => ({
  type: "ADD_TAG",
  input: text
});

export const deleteTag = index => ({
  type: "DELETE_TAG",
  index
});
