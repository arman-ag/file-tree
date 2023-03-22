import { FileItem } from '@/components/FileItem';
import { FolderItem } from '@/components/FolderItem';
import { useState } from 'react';
import { BiFolderPlus } from 'react-icons/bi';
import { RiFileAddLine } from 'react-icons/ri';
const index = () => {
  const [tree, setTree] = useState([]);
  const [name, setName] = useState('');
  const bigArray = [
    {
      type: 'folder',
      name: 'as',
      nestedItems: [
        { type: 'file', name: 'jsc' },
        {
          type: 'folder',
          name: 'asd',
          nestedItems: [{ type: 'file', name: 'sdasd' }],
        },
      ],
    },
    { type: 'file', name: 'casc' },
  ];
  const addItem = (item: string, name: string) => {
    if (item === 'folder') {
      setTree((items) => [...items, { type: 'folder', name: '', items: [] }]);
    } else {
      setTree((items) => [...items, { type: 'file', name: '' }]);
    }
  };
  console.log(bigArray);
  return (
    <div className='w-5/12 h-screen m-auto  bg-gray-200'>
      <div>
        <div className='bg-gray-300 w-6/12 m-auto flex align-baseline justify-between'>
          <span className='text-sm font-bold'>Menu</span>
          <div>
            <button onClick={() => addItem('folder', name)}>
              <BiFolderPlus />
            </button>
            <button onClick={() => addItem('file', name)}>
              <RiFileAddLine />
            </button>
          </div>
        </div>
      </div>
      {bigArray.map((item, index) => {
        if (item.type === 'folder') {
          return (
            <FolderItem
              nestedItems={item.nestedItems}
              folderName={item.name}
              setName={setName}
              key={index}
            />
          );
        } else {
          return <FileItem fileName={item.name} key={index} />;
        }
      })}
    </div>
  );
};
export default index;
