import MyBoxIcon from './BoxIcon/BoxIcon'
import { dataBoxIcon, dataMenu } from './constants'
import Menu from './Menu/Menu'
import Logo from '@icons/images/Logo-retina.png';
import reLoadIcon from '@icons/svgs/reloadIcon.svg';
import hearIcon from '@icons/svgs/heartIcon.svg';
import cartIcon from '@icons/svgs/cartIcon.svg';
import useScrollHandling from '@/hooks/useScrollHandling';
import { useEffect, useState } from 'react';
import './header.css';

function Header() {
  const { scrollPosition } = useScrollHandling();
  const [fixedPosition, setFixedPosition] = useState(false);

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


  //console.log(scrollPosition);

  return (
    <div className='relative'>
      <div className={fixedPosition? 'fixedHeader': 'normalHeader'}>
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
                  <Menu key={index} content={item.content} href={item.href} />
                )
              })
            }
          </div>
        </div>

        {/* Logo ở giữa */}
        <div><img src={Logo} alt='' className='w-[153px] h-[53px]' /></div>
        <div className='flex justify-center items-center'>
          <div className='flex justify-center items-center gap-5'>
            {
              dataMenu.slice(3, dataMenu.length).map((item, index) => {
                return (
                  <Menu key={index} content={item.content} href={item.href} />
                )
              })
            }
          </div>

          <div className='flex justify-center items-center ml-3 gap-3'>
            <img className='size-[26px]' src={reLoadIcon} alt='reLoadIcon' />
            <img className='size-[26px]' src={hearIcon} alt='hearIcon' />
            <img className='size-[26px]' src={cartIcon} alt='cartIcon' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header