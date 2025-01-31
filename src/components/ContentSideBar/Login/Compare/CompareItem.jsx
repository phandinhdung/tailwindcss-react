import { IoMdClose } from "react-icons/io";
import './compare.css'

function CompareItem() {
  return (
    <div className="pdd-product-compare-cart relative w-full flex bg-gray-100 hover:bg-gray-200 transition-all duration-300 ease-linear px-3 py-4 rounded-md">
      <img className="w-[70px]" src='./src/assets/images/manMin1.jpg' alt="image" />
      <div className="ml-3 text-[#333] text-[15px]">
        <div>Titlte of product</div>
        <div>$9999.99</div>
      </div>
      <div className="absolute top-2 right-0 cursor-pointer translate-x-0 transition-all duration-300 ease-linear opacity-0 pdd-show-close-button"><IoMdClose className="text-[23px] text-gray-700" /></div>
    </div>
  )
}

export default CompareItem