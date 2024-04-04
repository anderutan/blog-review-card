import { useState } from 'react';
import illustration from './assets/images/illustration-article.svg';
import avatar from './assets/images/image-avatar.webp';

function App() {
  const [isHover, setIsHover] = useState(false);
  return (
    <div className='h-screen w-full bg-amber-300 flex justify-center items-center'>
      <div
        className='w-[384px] h-[522px] bg-white rounded-2xl flex flex-col gap-6 p-6 border-[1px] border-black shadow-3xl hover:shadow-4xl transition-all ease-in-out'
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <img src={illustration} alt='' className='rounded-lg' />
        <div className='flex flex-col gap-3 '>
          <p className='text-[14px] font-bold leading-5 px-3 py-1 bg-amber-300 self-start rounded-md'>
            Learning
          </p>
          <p className='text-[14px] leading-5'>Published 21 Dec 2023</p>
          <h1
            className={`text-2xl font-bold tracking-tight leading-9 ${
              isHover ? 'sm:text-amber-300' : 'text-black'
            }`}
          >
            HTML & CSS foundations
          </h1>
          <p
            className={`leading-6 ${
              isHover ? 'sm:text-zinc-500' : 'text-black'
            }`}
          >
            These languages are the backbone of every website, defining
            structure, content, and presentation.
          </p>
        </div>
        <div className='flex items-center gap-4'>
          <img src={avatar} alt='' className='h-8' />
          <p className='text-[14px] font-bold leading-5'>Greg Hooper</p>
        </div>
      </div>
    </div>
  );
}

export default App;
