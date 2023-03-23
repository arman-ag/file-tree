import { findValue } from '@/common/findValue';
import { FormEvent, useState } from 'react';
import { FaFolder } from 'react-icons/fa';
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from 'react-icons/md';

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
  const [show, setShow] = useState(true);

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
    <div className='relative '>
      <div onClick={(e) => addItem(e)} className='flex items-center  ml-9'>
        <div className='absolute top-1.5 left-0 flex'>
          <button onClick={() => setShow((Condition) => !Condition)}>
            {show ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />}
          </button>
          <FaFolder className='mr-2' />
        </div>
        {choseName && folderName.length === 0 ? (
          <form onSubmit={(event) => submit(event)}>
            <input value={name} onChange={(e) => setName(e.target.value)} />
          </form>
        ) : (
          <div>
            <span>{folderName}</span>
            <div className={`${show ? 'block' : 'hidden'}`}>
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
          </div>
        )}
      </div>
    </div>
  );
};
