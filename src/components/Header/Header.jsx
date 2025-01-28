import React from 'react'
import MyBoxIcon from './BoxIcon/BoxIcon'
import { dataBoxIcon } from './BoxIcon/constants'

function Header() {
  return (
    <div className='flex items-center'>
      <div>
        <div className='flex justify-center items-center gap-1'>
          {
            dataBoxIcon.map((item, id) => {
              return <MyBoxIcon key={id} type={item.type} href={item.href}/>
            })
          }
        </div>
        <div></div>
      </div>
      <div></div>
      <div></div>
    </div>
  )
}

export default Header