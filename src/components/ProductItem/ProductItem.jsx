import { TfiReload } from "react-icons/tfi";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";
import { IoEyeOutline } from "react-icons/io5";
import './productItem.css'
import { useContext } from "react";
import { SidebarContext } from "@contexts/SidebarProvider";

function ProductItem({ firstImage, secondImage, name, price }) {
  const { setIsOpen, setType } = useContext(SidebarContext);

  const handleOnClickEyeIcon = () => {
    setIsOpen(true);
    setType('productDetail');
  }

  return (
    <div>
      <div className="product-item relative cursor-pointer">
        <div className={`showHideFirstProductImage h-[400px] w-[292px] bg-[url('${firstImage}')] bg-center bg-cover bg-no-repeat rounded-md`} />
        <div className={`showHideSecondProductImage h-[400px] w-[292px] bg-[url('${secondImage}')] bg-center bg-cover bg-no-repeat rounded-md`} />
        {/* <div className={`showHideFirstProductImage h-[400px] w-[292px] bg-[url('./src/assets/images/man20.jpg')] bg-center bg-cover bg-no-repeat rounded-md`} /> */}
        {/* <div className="showHideSecondProductImage h-[400px] w-[292px] bg-[url('./src/assets/images/man21.jpg')] bg-center bg-cover bg-no-repeat rounded-md" /> */}
        <div className='showFunctionIcons flex flex-col justify-center items-center absolute bottom-7'>
          <div className='boxIcon rounded-t-md'>
            <BsCart3 className='text-[20px]' />
          </div>
          <div className='boxIcon'>
            <IoMdHeartEmpty className='text-[23px]' />
          </div>
          <div className='boxIcon'>
            <TfiReload className='text-[20px]' />
          </div>
          <div onClick={handleOnClickEyeIcon} className='boxIcon rounded-b-md'>
            <IoEyeOutline className='text-[20px]' />
          </div>
        </div>
      </div>
      <div className='text-[19px] text-gray-500 text-center mt-2 font-Poppins'>Warm Yello </div>
      <div className='text-[16px] text-gray-500 text-center'>$999</div>
    </div>
  )
}

export default ProductItem