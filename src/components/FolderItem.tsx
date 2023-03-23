import { findValue } from '@/common/findValue';
import { FormEvent, MouseEvent, useState } from 'react';
import { AiOutlineFolder, AiOutlineFolderOpen } from 'react-icons/ai';
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from 'react-icons/md';
import { FileItem } from './FileItem';
import { FolderItemType } from './types';

export const FolderItem = ({
  id,
  folderName,
  nestedItems,
  setSelectedItem,
  tree,
  setTree,
}: FolderItemType) => {
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
  const addItem = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setSelectedItem(id);
  };
  return (
    <div onClick={(e) => addItem(e)} className='relative '>
      <div className='flex items-center  ml-9 '>
        <div className='absolute top-1 left-0 flex cursor-pointer  '>
          <button onClick={() => setShow((Condition) => !Condition)}>
            {show ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />}
          </button>
          {show ? (
            <AiOutlineFolderOpen className='mr-2 text-xl	' />
          ) : (
            <AiOutlineFolder className='mr-2 text-xl	' />
          )}
        </div>
        {choseName && folderName.length === 0 ? (
          <form onSubmit={(event) => submit(event)}>
            <input
              className='w-20 rounded-sm	ml-1 '
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </form>
        ) : (
          <div>
            <span className=' cursor-pointer ml-1'>{folderName}</span>
            <div className={`${show ? 'block' : 'hidden'}`}>
              {nestedItems &&
                nestedItems.map((item, index) => {
                  if (item.type === 'folder') {
                    return (
                      <div key={index}>
                        <FolderItem
                          tree={tree}
                          setTree={setTree}
                          id={item?.id}
                          setSelectedItem={setSelectedItem}
                          nestedItems={item?.nestedItems}
                          folderName={item?.name}
                          key={index}
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
