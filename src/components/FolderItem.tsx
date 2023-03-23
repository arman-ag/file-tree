import { findValue } from '@/common/findValue';
import { FormEvent, useState } from 'react';
import { FaFolder } from 'react-icons/fa';
import { FileItem } from './FileItem';
export const FolderItem = ({
  id,
  folderName,
  nestedItems,
  setSelectedItem,
  tree,
  setTree,
}) => {
  const [choseName, setChoseName] = useState(true);
  const [name, setName] = useState(folderName);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setChoseName(false);
    const result = findValue(tree, id);
    result.name = name;
    setTree([...tree]);
    setName('');
  };
  const addItem = (e) => {
    e.stopPropagation();
    setSelectedItem(id);
  };
  return (
    <div onClick={(e) => addItem(e)} className='flex'>
      <FaFolder className='mr-2' />
      {choseName && folderName.length === 0 ? (
        <form onSubmit={(event) => submit(event)}>
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </form>
      ) : (
        <div>
          <span>{folderName}</span>
          {nestedItems &&
            nestedItems.map((item, index) => {
              if (item.type === 'folder') {
                return (
                  <FolderItem
                    tree={tree}
                    setTree={setTree}
                    id={item?.id}
                    setSelectedItem={setSelectedItem}
                    nestedItems={item?.nestedItems}
                    folderName={item?.name}
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
      )}
    </div>
  );
};
