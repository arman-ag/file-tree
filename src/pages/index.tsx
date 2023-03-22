import { useState } from 'react';
import { BiFolderPlus } from 'react-icons/bi';
import { RiFileAddLine } from 'react-icons/ri';
import { File } from '../components/File';
const index = () => {
  const [file, setFile] = useState({});
  return (
    <div className='w-5/12 h-screen m-auto  bg-black'>
      <div>
        <div className='bg-gray-300 w-6/12 m-auto flex align-baseline justify-between'>
          <span className='text-sm font-bold'>Menu</span>
          <div>
            <button>
              <BiFolderPlus />
            </button>
            <button onClick={s}>
              <RiFileAddLine />
            </button>
            {Array.map((a, key) => {
              return <File key={key} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default index;
