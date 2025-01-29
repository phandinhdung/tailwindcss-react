import MyBoxIcon from './BoxIcon/BoxIcon'
import { dataBoxIcon, dataMenu } from './BoxIcon/constants'
import Menu from './Menu/Menu'
import Logo from '@icons/images/Logo-retina.png';
import reLoadIcon from '@icons/svgs/reloadIcon.svg';
import hearIcon from '@icons/svgs/heartIcon.svg';
import cartIcon from '@icons/svgs/cartIcon.svg';

function Header() {
  return (
    <div className='w-[1250px] flex items-center h-[83px] justify-between mx-auto absolute top-0 right-0 left-0'>
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
                <Menu className="pdd-top-menu-item" key={index} content={item.content} href={item.href} />
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
  )
}

export default Header