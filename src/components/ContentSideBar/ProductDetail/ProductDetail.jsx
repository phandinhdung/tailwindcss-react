import { SidebarContext } from '@contexts/SidebarProvider';
import { useContext } from 'react';

function ProductDetail() {

  const { setIsOpen, setType } = useContext(SidebarContext);

  const handleOnClickAddToCartBtn = () => {
    setIsOpen(false);

    const goiAPI = async () => {
      setTimeout(() => {
        setType('cart');
        setIsOpen(true);
      }, 500)
    };

    goiAPI();
  }


  return (
    <div>
      <h1>Product Detail</h1>
      <button onClick={handleOnClickAddToCartBtn} className="w-full text-center text-white bg-black hover:bg-gray-950 mt-3 rounded-md py-2 uppercase">Add To Cart</button>
    </div>
  )
}

export default ProductDetail