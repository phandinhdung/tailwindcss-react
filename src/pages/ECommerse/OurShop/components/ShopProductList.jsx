import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import { CiCircleList } from "react-icons/ci";
import ProductItem from "@components/ProductItem/ProductItem";

function ShopProductList() {
  return (
    <div className='mt-3 mb-9'>
      {/* filter */}
      <div className='flex justify-between'>
        <div className='flex justify-start items-center gap-7'>
          <select className='border-gray-500 border-[1px] py-1 rounded-sm'>
            <option>Default sorting</option>
            <option value="">Sort by popularity</option>
            <option value="">Sort by latest</option>
            <option value="">Sort by price: low to high</option>
            <option value="">Sort by price: high to low</option>
          </select>

          <div className='flex justify-center items-center gap-2'>
            <TfiLayoutGrid4Alt className='text-[24px] cursor-pointer' />
            <div className='bg-[#e1e1e1] h-[20px] w-[1px]' />
            <CiCircleList className='text-[24px] cursor-pointer' />
          </div>
        </div>


        <div className='flex items-center gap-2'>
          <span>Show</span>
          <select className='border-gray-500 border-[1px] py-1 rounded-sm w-[50px]'>
            <option>8</option>
            <option value="">12</option>
            <option value="">All</option>
          </select>
        </div>
      </div>

      {/* product list */}
      <div className="mt-3 grid grid-cols-4 items-center gap-7">
        <ProductItem firstImage='./src/assets/images/mug1.jpg' secondImage='./src/assets/images/mug2.jpg' />
        <ProductItem firstImage='./src/assets/images/man1.jpeg' secondImage='./src/assets/images/mug4.jpg' />
        <ProductItem firstImage='./src/assets/images/mug5.jpg' secondImage='./src/assets/images/story3.jpg' />
        <ProductItem firstImage='./src/assets/images/mug1.jpg' secondImage='./src/assets/images/mug2.jpg' />
        <ProductItem firstImage='./src/assets/images/man1.jpeg' secondImage='./src/assets/images/mug4.jpg' />
        <ProductItem firstImage='./src/assets/images/mug5.jpg' secondImage='./src/assets/images/story3.jpg' />
      </div>
    </div >
  )
}

export default ShopProductList