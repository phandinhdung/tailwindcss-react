import CompareItem from "@components/ContentSideBar/Login/Compare/CompareItem";
import { TfiReload } from "react-icons/tfi";



function Compare() {
  return (
    <div className="flex flex-col px-5 py-5">
      <div className="flex flex-col justify-center items-center gap-1">
        <TfiReload className="text-[25px]" />
        <h1 className="text-[20px]">COMPARE</h1>
      </div>

      {/* danh sách các sản phẩm cần so sánh */}
      <div className="flex flex-col justify-center items-center mt-5 gap-1">
        <CompareItem />
        <CompareItem />
        <CompareItem />
      </div>
    </div>
  )
}

export default Compare