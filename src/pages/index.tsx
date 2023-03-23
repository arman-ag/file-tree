// @ts-ignore
import { findValue } from '@/common/findValue';
import { FileItem } from '@/components/FileItem';
import { FolderItem } from '@/components/FolderItem';
import { useState } from 'react';
import { BiFolderPlus } from 'react-icons/bi';
import { RiDeleteBin2Line, RiFileAddLine } from 'react-icons/ri';

const index = () => {
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
  console.log(selectedItem);

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

  // const filterdList = (arr, id) => {
  //   console.log({ id });
  //   const resultList = arr.filter((obj) => {
  //     if (obj.id !== id) {
  //       return obj;
  //     }
  //     if (obj.nestedItems) {
  //       let result = filterdList(obj.nestedItems, id);
  //       return result;
  //     }
  //   });
  //   return resultList;
  // };

  const removeItem = () => {
    // const res = filterdList(tree, selectedItem);
    const res = tree.map((element) => {
      return {
        ...element,
        nestedItems: element.nestedItems.filter(
          (item) => item.id === selectedItem
        ),
      };
    });
    console.log('result', res);
    setTree([...res]);
  };
  console.log('tree', tree);

  return (
    <>
      <div className='w-5/12 h-screen m-auto  bg-gray-200'>
        <div>
          <div className='bg-gray-300  m-auto flex align-baseline justify-between'>
            <span className='text-sm font-bold'>Menu</span>
            <div>
              <button onClick={() => addItem('folder')}>
                <BiFolderPlus />
              </button>
              <button onClick={() => addItem('file')}>
                <RiFileAddLine />
              </button>
              <button onClick={removeItem}>
                <RiDeleteBin2Line />
              </button>
            </div>
          </div>
        </div>
        <div>
          {tree.map((item, index) => {
            if (item?.type === 'folder') {
              return (
                <div className='flex' key={index}>
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
      </div>
    </>
  );
};
export default index;
