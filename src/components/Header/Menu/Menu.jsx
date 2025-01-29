
import './menu.css'

function Menu({content, href}) {
  return (
    <div className='eCommerse-top-menu-item'>
      <a href={href}>{content}</a>
    </div>
  )
}

export default Menu