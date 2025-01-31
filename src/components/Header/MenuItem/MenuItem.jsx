
import { useContext } from 'react'
import './menu.css'
import { SidebarContext } from '@contexts/SidebarProvider'

function MenuItem({ content, href }) {
  const { setIsOpen, setType } = useContext(SidebarContext);

  const handleClickMenuItem = (type) => {
    if (type === 'login') {
      setIsOpen(true);
      setType(type);
    }
  }

  return (
    <div className='eCommerse-top-menu-item' onClick={() => handleClickMenuItem(href)}>
      {content}
    </div>
  )
}

export default MenuItem