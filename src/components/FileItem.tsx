import { findValue } from '@/common/findValue';
import { FormEvent, MouseEvent, useState } from 'react';
import { AiOutlineFile } from 'react-icons/ai';
import { FileItemType } from './types';

export const FileItem = ({
  fileName,
  setSelectedItem,
  tree,
  setTree,
  id,
}: FileItemType) => {
  const [name, setName] = useState('');
  const [choseName, setChoseName] = useState(true);
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setChoseName(false);
    const result = findValue(tree, id);
    result.name = name;
    setTree([...tree]);
    setName('');
  };
  const addItem = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setSelectedItem(id);
  };

  return (
    <div
      onClick={(e) => addItem(e)}
      className='flex items-center cursor-pointer  ml-4'
    >
      <AiOutlineFile className='mr-1 text-lg' />
      {choseName ? (
        <form onSubmit={(event) => submit(event)}>
          <input
            className='w-20 rounded-sm	ml-1 '
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </form>
      ) : (
        <span>{fileName}</span>
      )}
    </div>
  );
};
