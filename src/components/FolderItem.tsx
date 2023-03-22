import { FormEvent, useState } from 'react';
import { FaFolder } from 'react-icons/fa';
import { FileItem } from './FileItem';
export const FolderItem = ({ folderName, setName, nestedItems }) => {
  const [choseName, setChoseName] = useState(true);
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setChoseName(false);
    setName('');
  };
  return (
    <div className='flex'>
      <FaFolder className='mr-2' />
      {!(folderName.length > 0) ? (
        <form onSubmit={(event) => submit(event)}>
          <input onChange={(e) => setName(e.target.value)} />
        </form>
      ) : (
        <div>
          <span>{folderName}</span>
          {nestedItems &&
            nestedItems.map((item, index) => {
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
      )}
    </div>
  );
};
