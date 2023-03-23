import { FormEvent, useState } from 'react';
import { FaFolder } from 'react-icons/fa';
import { FileItem } from './FileItem';
export const FolderItem = ({
  id,
  folderName,
  nestedItems,
  setSelectedItem,
}) => {
  const [choseName, setChoseName] = useState(true);
  const [name, setName] = useState('');

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setChoseName(false);
    setName('');
  };
  const addItem = (e) => {
    e.stopPropagation();
    setSelectedItem(id);
  };
  return (
    <div onClick={(e) => addItem(e)} className='flex'>
      <FaFolder className='mr-2' />
      {!(folderName.length > 0) ? (
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
                    id={item.id}
                    setSelectedItem={setSelectedItem}
                    nestedItems={item.nestedItems}
                    folderName={item.name}
                    setName={setName}
                    key={index}
                  />
                );
              } else {
                return (
                  <FileItem
                    setSelectedItem={setSelectedItem}
                    fileName={item.name}
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
