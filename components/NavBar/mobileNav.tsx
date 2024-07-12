'use client';
import { useState, useEffect } from 'react';
import splitevText from '../../public/images/splitEvText.svg';
import splitevLogo from '../../public/images/splitEvLogo.svg';
import loginIcon from '../../public/images/login.svg';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaXmark } from 'react-icons/fa6';
import { useRouter } from 'next/router';

export const MobileNav = () => {
  const [theNav, setTheNav] = useState(false);
  const router = useRouter();
  const [pathname, setPathname] = useState('');

  useEffect(() => {
    if (router.isReady) {
      setPathname(router.pathname);
    }
  }, [router.isReady, router.pathname]);

  return (
    <nav className='flex md:hidden z-[2000] justify-center fixed w-full left-0 right-0 top-0 py-[30px] items-center gap-5 px-[20px]'>
      <Link href='/' className='bg-navBg backdrop-blur-[20px] p-[20px] gap-[5px] rounded-full shadow-md'>
        <Image className='w-[26px]' src={splitevLogo} alt='splitev logo' width={26} height={26} />
      </Link>
      {theNav && (
        <div className='bg-navBg backdrop-blur-[20px] top-[100px] shadow-md rounded-[33px] gap-[20px] pt-[5px] flex flex-col right-[20px] left-[20px] fixed items-center justify-between px-[30px] py-[10px]'>
          <ul className='flex items-center flex-col gap-[34px] pt-[5px]'>
            <li className={`text-[16px] font-[400] ${pathname === '/Faq' ? 'text-black font-bold' : 'text-[#7F847D]'} leading-[130%]`}>
              <Link href='/Faq'>FAQ</Link>
            </li>
            <li className='text-[16px] font-[400] text-[#7F847D] leading-[130%]'>
              <Link href='#'>Contact</Link>
            </li>
            <li className={`text-[16px] font-[400] ${pathname === '/driver' ? 'text-black font-bold' : 'text-[#7F847D]'} leading-[130%]`}>
              <Link href='/driver'>About us</Link>
            </li>
            <li className={`text-[16px] font-[400] ${pathname === '/blog-host' ? 'text-black font-bold' : 'text-[#7F847D]'} leading-[130%]`}>
              <Link href='/blog-host'>Blog</Link>
            </li>
            <li className='text-[16px] font-[400] text-[#7F847D] leading-[130%]'>
              <Link href='#'>Store</Link>
            </li>
          </ul>
          <div className='flex items-center flex-col py-[8px] px-[10px] gap-[20px]'>
            <Link href='#' className='flex flex-row items-center text-[#7F847D] gap-[6px]'>
              Log in <Image src={loginIcon} alt='icon' className='w-[24px] h-[24px]' height={24} width={24} />
            </Link>
            <Link className='bg-gradient-to-r from-[#BDE6A4] to-[#DEFEBA] py-[10px] px-[18px] text-center items-center rounded-[22px]' href='#'>
              Create Account
            </Link>
          </div>
        </div>
      )}
      <div className='bg-navBg relative backdrop-blur-[20px] py-[20px] shadow-md rounded-[33px] gap-[100px] flex items-center w-full h-full justify-between px-[20px] py-[10px]'>
        <Link href='/'>
          <Image className='w-[100px] self-center h-auto' alt='splitev' src={splitevText} />
        </Link>
        {!theNav ? (
          <button onClick={() => setTheNav(true)}>
            <FaBars className='w-[70px] cursor-pointer' />
          </button>
        ) : (
          <button onClick={() => setTheNav(false)}>
            <FaXmark className='cursor-pointer' />
          </button>
        )}
      </div>
    </nav>
  );
};
