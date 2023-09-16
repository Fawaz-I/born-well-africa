import React from 'react';

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className=' flex justify-between text-white'>
      <img
        src='../logo-cropped.svg'
        alt=''
        className='mx-auto mt-4 w-80 xl:ml-8'
      />
      <ul className='hidden xl:flex'>
        <li className='mt-12'>
          <a href='' className='mx-12 capitalize'>
            who we are
          </a>
        </li>
        <li className='mt-12'>
          <a href='' className='mx-12 capitalize'>
            who we help
          </a>
        </li>
        <li className='mt-12'>
          <a href='' className='mx-12 capitalize'>
            what we do
          </a>
        </li>
        <li className='mt-12'>
          <a
            href=''
            className='mx-12 rounded-full bg-[#f2902f] px-6 py-4 uppercase'
          >
            donate
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
