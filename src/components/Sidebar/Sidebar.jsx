import { useContext } from "react"
import { SidebarContext } from "@/contexts/SidebarProvider"
import { CgClose } from "react-icons/cg";
import Login from "@components/ContentSideBar/Login/Login";
import Compare from "@components/ContentSideBar/Compare/Compare";
import WishList from "@components/ContentSideBar/WishList/WishList";
import Cart from "@components/ContentSideBar/Cart/Cart";
import './sidebar.css';
import ProductDetail from "@components/ContentSideBar/ProductDetail/ProductDetail";

function Sidebar() {
  const { isOpen, setIsOpen, type } = useContext(SidebarContext);

  const handleRenderContext = () => {
    switch (type) {
      case 'login':
        return <Login />;
      case 'compare':
        return <Compare />;
      case 'wishList':
        return <WishList />;
      case 'cart':
        return <Cart />;
      case 'productDetail':
        return <ProductDetail />;
      default:
        return <Login />;
    }
  };



  // const handleWhenCloseSidebar = () => {
  //   const sidebar = document.getElementById("pdd-sidebar");
  //   sidebar.style.transition = 'all 0.5s ease-out';
  //   sidebar.style.opacity = '0.3';
  //   sidebar.style.right = '-400px';

  //   const overlay = document.getElementById("pdd-overlay-sidebar");
  //   overlay.style.transition = 'all 0.5s ease-out';
  //   overlay.style.opacity = '0';
  // };

  return (
    // isOpen &&
    // <div className="relative">
    //   {/* overlay */}
    //   <div id="pdd-overlay-sidebar" onClick={handleWhenCloseSidebar} className="pdd-overlay"></div>

    //   {/* sidebar */}
    //   <div id="pdd-sidebar" className="pdd-abce">
    //     <div onClick={handleWhenCloseSidebar} className="absolute top-[25px] left-[-45px] w-[35px] h-[35px] bg-[#fff] hover:bg-gray-200 cursor-pointer transition-all duration-300 rounded-full flex justify-center items-center">
    //       <CgClose className="text-[23px] text-gray-800" />
    //     </div>
    //     {handleRenderContext()}
    //   </div>
    // </div>





    <div className="relative">
      {/* overlay */}
      <div onClick={() => setIsOpen(false)} className={isOpen && "pdd-overlay"}></div>

      {/* sidebar */}
      <div className={`pdd-sidebar ${isOpen && "pdd-showSidebar"}`}>
        {
          isOpen && (
            <div onClick={() => setIsOpen(false)} className="absolute top-[25px] left-[-45px] w-[35px] h-[35px] bg-[#fff] hover:bg-gray-200 cursor-pointer transition-all duration-300 rounded-full flex justify-center items-center">
              <CgClose className="text-[23px] text-gray-800" />
            </div>
          )
        }

        {handleRenderContext()}
      </div>
    </div>
  )
}

export default Sidebar