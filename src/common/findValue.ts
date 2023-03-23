//find selected file or folder

export const findValue = (arr, itemId: number) => {
  for (const obj of arr) {
    if (obj.id === itemId) {
      return obj;
    }
    if (obj.nestedItems) {
      let result = findValue(obj.nestedItems, itemId);
      if (result) {
        return result;
      }
    }
  }
};
