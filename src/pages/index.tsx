import { FileItem } from '@/components/FileItem';
import { FolderItem } from '@/components/FolderItem';
import { useState } from 'react';
import { BiFolderPlus } from 'react-icons/bi';
import { RiFileAddLine } from 'react-icons/ri';
const index = () => {
  const [tree, setTree] = useState<string[]>([]);
  const addItem = (item: string) => {
    if (item === 'folder') {
      setTree((items) => [...items, 'folder']);
    } else {
      setTree((items) => [...items, 'file']);
    }
  };
  return (
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
      {tree.map((item, key) => {
        if (item === 'folder') {
          return <FolderItem key={key} />;
        } else {
          return <FileItem key={key} />;
        }
      })}
    </div>
  );
};
export default index;
