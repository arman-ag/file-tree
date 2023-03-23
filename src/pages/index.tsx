// @ts-ignore
import { findValue } from '@/common/findValue';
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

  const [tree, setTree] = useState([
    {
      type: 'folder',
      id: 0,
      name: 'main',
      nestedItems: [],
    },
  ]);
  const [selectedItem, setSelectedItem] = useState<number>(0);
  const [id, setId] = useState<number>(1);

  //add Item to file tree
  const addItem = (type: string) => {
    const result = findValue(tree, selectedItem);
    if (type === 'folder') {
      result?.nestedItems.push({
        type,
        id,
        name: '',
        nestedItems: [],
      });
      setTree([...tree]);
    } else {
      result?.nestedItems.push({
        type,
        id,
        name: '',
      });
      setTree([...tree]);
    }
    setId((prevId) => prevId + 1);
  };

  console.log('tree', tree);

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
          if (item?.type === 'folder') {
            return (
              <FolderItem
                tree={tree}
                setTree={setTree}
                id={item?.id}
                nestedItems={item?.nestedItems}
                folderName={item?.name}
                setSelectedItem={setSelectedItem}
                key={index}
              />
            );
          } else {
            return (
              <FileItem
                tree={tree}
                setTree={setTree}
                id={item?.id}
                setSelectedItem={setSelectedItem}
                nestedItems={item?.nestedItems}
                fileName={item?.name}
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
