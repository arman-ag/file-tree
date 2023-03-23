import { findValue } from '@/common/findValue';
import { FileItem } from '@/components/FileItem';
import { FolderItem } from '@/components/FolderItem';
import { useState } from 'react';
import {
  AiOutlineDelete,
  AiOutlineFileAdd,
  AiOutlineFolderAdd,
} from 'react-icons/ai';
interface nestedListType {
  type: string;
  id: number;
  name: string;
  nestedItems?: nestedListType[] | undefined;
}
export default function Home() {
  const [tree, setTree] = useState<nestedListType[]>([
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
      result?.nestedItems?.push({
        type,
        id,
        name: '',
        nestedItems: [],
      });
      setTree([...tree]);
    } else {
      result?.nestedItems?.push({
        type,
        id,
        name: '',
      });
      setTree([...tree]);
    }
    setId((prevId) => prevId + 1);
  };

  const filterList = (list: Array<nestedListType>, id: number) => {
    return list
      ?.map((item) => {
        return { ...item };
      })
      ?.filter((item) => {
        if ('nestedItems' in item) {
          item.nestedItems = filterList(item?.nestedItems, id);
        }
        return item.id !== id;
      });
  };
  //remove item
  const removeItem = () => {
    if (selectedItem === 0) {
      alert('You cant remove main folder!!');
    } else {
      const res = filterList(tree, selectedItem);
      setTree([...res]);
    }
  };

  return (
    <>
      <div className='w-5/12 h-screen m-auto  bg-gray-200'>
        <div>
          <div className='bg-gray-300 px-2 h-10  m-auto flex items-center align-baseline justify-between'>
            <span className='text-lg '>Menu</span>
            <div>
              <button
                className='active:bg-slate-400 rounded-full    '
                onClick={() => addItem('folder')}
              >
                <AiOutlineFolderAdd className=' text-2xl' />
              </button>
              <button
                className='active:bg-slate-400 rounded-full    '
                onClick={() => addItem('file')}
              >
                <AiOutlineFileAdd className=' text-2xl' />
              </button>
              <button
                className='active:bg-slate-400 rounded-full    '
                onClick={removeItem}
              >
                <AiOutlineDelete className=' text-2xl' />
              </button>
            </div>
          </div>
        </div>
        <div className='mt-2 ml-1'>
          {tree.map((item, index) => {
            if (item?.type === 'folder') {
              return (
                <div key={index}>
                  <FolderItem
                    tree={tree}
                    setTree={setTree}
                    id={item?.id}
                    nestedItems={item?.nestedItems}
                    folderName={item?.name}
                    setSelectedItem={setSelectedItem}
                  />
                </div>
              );
            } else {
              return (
                <div key={index}>
                  <FileItem
                    tree={tree}
                    setTree={setTree}
                    id={item?.id}
                    setSelectedItem={setSelectedItem}
                    fileName={item?.name}
                  />
                </div>
              );
            }
          })}
        </div>
      </div>
    </>
  );
}
