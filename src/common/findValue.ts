//find selected file or folder
interface nestedListType {
  type?: string;
  id?: number;
  name?: string;
  nestedItems?: nestedListType[];
}

export const findValue = (
  arr: nestedListType[],
  itemId: number
): nestedListType => {
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
