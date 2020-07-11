export const updateObjectsInArray = (items, itemId, objPropName, newObject) => {
  items.map((el) => {
    if (el[objPropName] === itemId) {
      return { ...el, newObject };
    }
    return el;
  });
};
