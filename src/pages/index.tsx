import { useState } from 'react';
import { BiFolderPlus } from 'react-icons/bi';
import { RiFileAddLine } from 'react-icons/ri';
import { File } from '../components/File';
const index = () => {
  const [tree, setTree] = useState([]);
  return (
    <div className='w-5/12 h-screen m-auto  bg-gray-200'>
      <div>
        <div className='bg-gray-300 w-6/12 m-auto flex align-baseline justify-between'>
          <span className='text-sm font-bold'>Menu</span>
          <div>
            <button>
              <BiFolderPlus />
            </button>
            <button>
              <RiFileAddLine />
            </button>
          </div>
        </div>
      </div>
      <File />
    </div>
  );
};
export default index;
