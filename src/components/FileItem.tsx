import { findValue } from '@/common/findValue';
import { FormEvent, useState } from 'react';
import { AiOutlineFile } from 'react-icons/ai';

export const FileItem = ({ fileName, setSelectedItem, tree, setTree, id }) => {
  const [name, setName] = useState('');
  const [choseName, setChoseName] = useState(true);
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setChoseName(false);
    const result = findValue(tree, id);
    result.name = name;
    console.log(tree);
    setTree([...tree]);
    setName('');
  };
  const addItem = (e) => {
    e.stopPropagation();
    setSelectedItem(id);
  };

  return (
    <div onClick={(e) => addItem(e)} className='flex items-center'>
      <AiOutlineFile className='mr-1' />
      {choseName ? (
        <form onSubmit={(event) => submit(event)}>
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </form>
      ) : (
        <span>{fileName}</span>
      )}
    </div>
  );
};
