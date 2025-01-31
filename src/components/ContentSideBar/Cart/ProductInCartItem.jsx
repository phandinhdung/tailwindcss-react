import { IoMdClose } from "react-icons/io";
import './productInCartItem.css'

function ProductInCartItem({imageScr}) {
  return (
    <div className="pdd-product-item relative w-full flex bg-gray-100 hover:bg-gray-200 transition-all duration-300 ease-linear px-3 py-4 rounded-md">
      <img className="w-[70px]" src={imageScr} alt="image" />
      <div className="ml-3 text-[#333] text-[15px] flex flex-col justify-between">
        <div className="w-[100px] overflow-hidden whitespace-nowrap text-ellipsis">So cool, soft Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis quasi incidunt aperiam quam harum maxime quo impedit earum, eos necessitatibus repellendus minus, asperiores tempore accusantium deserunt eum blanditiis. Quam, sunt!</div>
        <div>1 x $999</div>
        <div>SKU: 12345</div>
      </div>
      <div className="absolute top-2 right-0 cursor-pointer translate-x-0 transition-all duration-300 ease-linear opacity-0 pdd-show-close-button"><IoMdClose className="text-[23px] text-gray-700" /></div>
    </div>
  )
}

export default ProductInCartItem