import { FileItem } from '@/components/FileItem';
import { FolderItem } from '@/components/FolderItem';
import { useState } from 'react';
import { BiFolderPlus } from 'react-icons/bi';
import { RiFileAddLine } from 'react-icons/ri';

const index = () => {
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

  const [tree, setTree] = useState(bigArray);
  const [selectedItem, setSelectedItem] = useState<number>(0);
  console.log(selectedItem);

  const findValue = (arr, val) => {
    for (const obj of arr) {
      if (obj.id === val) {
        return obj;
      }
      if (obj.nestedItems) {
        let result = findValue(obj.nestedItems, val);
        if (result) {
          return result;
        }
      }
    }
  };

  const addItem = (type: string) => {
    const result = findValue(tree, selectedItem);
    if (type === 'folder') {
      result?.nestedItems.push({
        type,
        name: 'yesss',
        nestedItems: [],
      });
      setTree([...tree]);
    } else {
      result?.nestedItems.push({
        type,
        name: 'yesss',
      });
      setTree([...tree]);
    }
  };

  return (
    <>
      <div className='w-5/12 h-screen m-auto  bg-gray-200'>
        <div>
          <div className='bg-gray-300 w-6/12 m-auto flex align-baseline justify-between'>
            <span className='text-sm font-bold'>Menu</span>
            <div>
              <button onClick={() => addItem('folder')}>
                <BiFolderPlus />
              </button>
              <button onClick={() => addItem('file')}>
                <RiFileAddLine />
              </button>
            </div>
          </div>
        </div>
        {tree.map((item, index) => {
          if (item.type === 'folder') {
            return (
              <FolderItem
                id={item.id}
                nestedItems={item.nestedItems}
                folderName={item.name}
                setSelectedItem={setSelectedItem}
                key={index}
              />
            );
          } else {
            return (
              <FileItem
                fileName={item.name}
                setSelectedItem={setSelectedItem}
                key={index}
              />
            );
          }
        })}
      </div>
    </>
  );
};
export default index;
