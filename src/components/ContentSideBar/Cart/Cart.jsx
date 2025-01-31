import ProductInCartItem from "@components/ContentSideBar/Cart/ProductInCartItem"
import { BsCart3 } from "react-icons/bs";

function Cart() {
  return (
    <div className="flex flex-col px-5 pt-5 pb-10 h-full overflow-auto">
      <div className="flex flex-col justify-center items-center gap-1">
        <BsCart3 className="text-[25px]" />
        <h1 className="text-[20px] uppercase">Cart</h1>
      </div>

      {/* danh sách các sản phẩm cần so sánh */}
      <div className="grow flex flex-col items-center mt-5 gap-1">
        <ProductInCartItem imageScr="./src/assets/images/manMin1.jpg" />
        <ProductInCartItem imageScr="./src/assets/images/manMin2.jpg" />
      </div>
      <div className="flex flex-row justify-between items-center my-6">
        <div className="uppercase">Subtotal:</div>
        <div>$240.29</div>
      </div>
      <div>
        <button className="w-full text-center text-white bg-black hover:bg-gray-950 rounded-md py-2 uppercase">View cart</button>
        <button className="w-full text-center text-white bg-black hover:bg-gray-950 mt-2 rounded-md py-2 uppercase">Checkout</button>
      </div>
    </div>
  )
}

export default Cart