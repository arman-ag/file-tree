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

let bigArray = [
  {
    type: 'folder',
    name: 'as',
    id: 1,
    nestedItems: [
      { type: 'file', name: 'jsc', id: 2 },
      {
        id: 3,
        type: 'folder',
        name: 'asd',
        nestedItems: [{ type: 'file', name: 'sdasd', id: 5 }],
      },
    ],
  },
  { type: 'file', name: 'casc', id: 4 },
];
