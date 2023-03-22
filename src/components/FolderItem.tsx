import { FormEvent, useState } from 'react';
import { FaFolder } from 'react-icons/fa';
export const FolderItem = () => {
  const [name, setName] = useState('');
  const [choseName, setChoseName] = useState(true);
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setChoseName(false);
  };
  return (
    <button className='flex'>
      <FaFolder className='mr-2' />
      {choseName ? (
        <form onSubmit={(event) => submit(event)}>
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </form>
      ) : (
        <span>{name}</span>
      )}
    </button>
  );
};
