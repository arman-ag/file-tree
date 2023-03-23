import { findValue } from '@/common/findValue';
import { FormEvent, useState } from 'react';
import { AiOutlineFile } from 'react-icons/ai';
import { DiJavascript1 } from 'react-icons/di';

export const FileItem = ({
  fileName,
  setSelectedItem,
  tree,
  setTree,
  id,
  nestedItems,
}) => {
  const [name, setName] = useState('');
  const [choseName, setChoseName] = useState(true);
  console.log(fileName);
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
    // setSelectedItem(nestedItems.id);
  };

  return (
    <div onClick={(e) => addItem(e)}>
      {choseName ? (
        <div className='flex items-baseline'>
          <AiOutlineFile className='mr-2' />
          <form onSubmit={(event) => submit(event)}>
            <input value={name} onChange={(e) => setName(e.target.value)} />
          </form>
        </div>
      ) : (
        <div className='flex items-baseline'>
          <DiJavascript1 className='mr-2' />
          <span>{fileName}</span>
        </div>
      )}
    </div>
  );
};
