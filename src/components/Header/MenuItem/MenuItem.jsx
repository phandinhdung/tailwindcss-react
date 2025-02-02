
import { useContext } from 'react'
import './menu.css'
import { SidebarContext } from '@contexts/SidebarProvider'
import { Link, useNavigate } from 'react-router-dom';

function MenuItem({ content, href }) {
  const { setIsOpen, setType } = useContext(SidebarContext);
  const navigate = useNavigate();

  const handleClickMenuItem = (href) => {
    if (href === 'login') {
      setIsOpen(true);
      setType(href);
    } else if (href === 'shop') {
      navigate('/shop');
    } else if (href === 'home') {
      navigate('/eCommerse');
    }
  }

  return (
    <div className='eCommerse-top-menu-item' onClick={() => handleClickMenuItem(href)}>
      {content}
    </div>
  )
}

export default MenuItem