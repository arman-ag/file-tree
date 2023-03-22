import { FormEvent, useState } from 'react';
import { AiOutlineFile } from 'react-icons/ai';
import { DiJavascript1 } from 'react-icons/di';
export const FileItem = () => {
  const [name, setName] = useState('');
  const [choseName, setChoseName] = useState(true);
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setChoseName(false);
  };

  return (
    <div>
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
          <span>{name}</span>
        </div>
      )}
    </div>
  );
};
