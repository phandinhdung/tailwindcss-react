import ProductMiniItem from "@components/ContentSideBar/ProductMiniItem/ProductMiniItem"
import { IoMdHeartEmpty } from "react-icons/io";

function WishList() {
  return (
    <div className="flex flex-col px-5 pt-5 pb-10 h-full overflow-auto">
      <div className="flex flex-col justify-center items-center gap-1">
        <IoMdHeartEmpty className="text-[25px]" />
        <h1 className="text-[20px] uppercase">WishList</h1>
      </div>

      {/* danh sách các sản phẩm cần so sánh */}
      <div className="grow flex flex-col items-center mt-5 gap-1">
        <ProductMiniItem imageScr="./src/assets/images/manMin1.jpg" />
        <ProductMiniItem imageScr="./src/assets/images/manMin2.jpg" />
        <ProductMiniItem imageScr="./src/assets/images/manMin1.jpg" />
        <ProductMiniItem imageScr="./src/assets/images/manMin2.jpg" />
        <ProductMiniItem imageScr="./src/assets/images/manMin1.jpg" />
        <ProductMiniItem imageScr="./src/assets/images/manMin2.jpg" />
        <ProductMiniItem imageScr="./src/assets/images/manMin1.jpg" />
        <ProductMiniItem imageScr="./src/assets/images/manMin2.jpg" />
        <ProductMiniItem imageScr="./src/assets/images/manMin1.jpg" />
        <ProductMiniItem imageScr="./src/assets/images/manMin2.jpg" />
      </div>

      <div>
        <button className="w-full text-center text-white bg-black hover:bg-gray-950 rounded-md py-2 uppercase">View wishlist</button>
        <button className="w-full text-center text-white bg-black hover:bg-gray-950 mt-2 rounded-md py-2 uppercase">Add all to cart</button>
      </div>
    </div>
  )
}

export default WishList