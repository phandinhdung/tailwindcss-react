import ProductMiniItem from "@components/ContentSideBar/ProductMiniItem/ProductMiniItem";
import { TfiReload } from "react-icons/tfi";

function Compare() {
  return (
    <div className="flex flex-col px-5 pt-5 pb-10 h-full overflow-auto">
      <div className="flex flex-col justify-center items-center gap-1">
        <TfiReload className="text-[25px]" />
        <h1 className="text-[20px] uppercase">COMPARE</h1>
      </div>

      {/* danh sách các sản phẩm cần so sánh */}
      <div className="grow flex flex-col items-center mt-5 gap-1">
        <ProductMiniItem imageScr="./src/assets/images/manMin1.jpg" />
        <ProductMiniItem imageScr="./src/assets/images/manMin2.jpg" />
      </div>

      <button className="w-full text-center text-white bg-black hover:bg-gray-950 mt-3 rounded-md py-2 uppercase">View compare</button>
    </div>
  )
}

export default Compare