import MyBoxIcon from './BoxIcon/BoxIcon'
import { dataBoxIcon, dataMenu } from './constants'
import MenuItem from './MenuItem/MenuItem'
import Logo from '@icons/images/Logo-retina.png';
import useScrollHandling from '@/hooks/useScrollHandling';
import { useContext, useEffect, useState } from 'react';
import './header.css';
import { SidebarContext } from '@/contexts/SidebarProvider';
import { TfiReload } from "react-icons/tfi";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";

function Header() {
  const { scrollPosition } = useScrollHandling();
  const [fixedPosition, setFixedPosition] = useState(false);

  const { setIsOpen, setType } = useContext(SidebarContext);

  useEffect(() => {
    // if (scrollPosition > 80) {
    //   setFixedPosition(true);
    //   //console.log('bat');
    // } else {
    //   setFixedPosition(false);
    //   //console.log('tat');
    // }

    setFixedPosition(scrollPosition > 100); //viết tắt của đoạn trên hoặc có thể dùng toán tử ba ngôi.
  }, [scrollPosition]);

  const handleOpenSidebar = (type) => {
    setIsOpen(true);
    setType(type);
  }

  //console.log(scrollPosition);

  return (
    <div className='relative'>
      <div className={fixedPosition ? 'fixedHeader' : 'normalHeader'}>
        <div className='w-[1250px] flex items-center h-[83px] justify-between mx-auto'>
          <div className='flex justify-center items-center'>
            <div className='flex justify-center items-center gap-2'>
              {
                dataBoxIcon.map((item, id) => {
                  return <MyBoxIcon key={id} type={item.type} href={item.href} />
                })
              }
            </div>
            <div className='flex justify-center items-center gap-5 ml-3'>
              {
                dataMenu.slice(0, 3).map((item, index) => {
                  return (
                    <MenuItem key={index} content={item.content} href={item.href} />
                  )
                })
              }
            </div>
          </div>

          {/* Logo ở giữa */}
          <div><img src={Logo} alt='' className='w-[153px] h-[53px]' /></div>

          {/* các menu item cuối */}
          <div className='flex justify-center items-center'>
            <div className='flex justify-center items-center gap-5'>
              {
                dataMenu.slice(3, dataMenu.length).map((item, index) => {
                  return (
                    <MenuItem key={index} content={item.content} href={item.href} />
                  )
                })
              }
            </div>

            <div className='flex justify-center items-center ml-6 gap-6'>
              <TfiReload onClick={() => handleOpenSidebar('compare')} className='text-[20px] cursor-pointer' />
              <IoMdHeartEmpty onClick={() => handleOpenSidebar('wishList')} className='text-[25px] cursor-pointer' />
              <BsCart3 onClick={() => handleOpenSidebar('cart')} className='text-[25px] cursor-pointer' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header