import { dataMenu } from './constants'

function Footer() {
  return (
    <div className="bg-[#363636] flex flex-col gap-5 justify-center items-center mt-[55px] p-9 w-full">
      <div className="bg-[url('./src/assets/images/logoEco2.png')] bg-cover w-[160px] h-[55px]"/>
      <div className='flex justify-center items-center gap-11'>
        {
          dataMenu.map((item, index) => {
            return (
              <a className='text-gray-300 hover:text-white' key={index} href={item.href}>{item.content}</a>
            )
          }
          )
        }
      </div>
      <p className='text-white font-Poppins tracking-widest'>Guaranteed safe checkout</p>
      <div className="bg-[url('./src/assets/images/checkout.png')] bg-cover w-[270px] h-[29px]"/>
      <p className='text-white font-Poppins tracking-widest'>Copyright © 2025 XStore. Created by Phan Dinh Dung</p>
    </div>
  )
}

export default Footer