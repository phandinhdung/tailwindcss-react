import { useContext } from "react"
import { SidebarContext } from "@/contexts/SidebarProvider"
import { CgClose } from "react-icons/cg";
import './sidebar.css';
import Login from "@components/ContentSideBar/Login/Login";
import Compare from "@components/ContentSideBar/Login/Compare/Compare";

function Sidebar() {
  const { isOpen, setIsOpen, type } = useContext(SidebarContext);

  const handleRenderContext = () => {
    switch (type) {
      case 'login':
        return <Login />;
      case 'compare':
        return <Compare />;
      case 'wishlist':
        return 'wishlist';
      case 'cart':
        return 'cart';
      default:
        return <Login />;
    }
  };

  return (
    <div className="relative">
      {/* overlay */}
      <div onClick={() => setIsOpen(false)} className={isOpen && "pdd-overlay"}></div>

      {/* sidebar */}
      <div className={`pdd-sidebar ${isOpen && "pdd-showSidebar"}`}>
        {
          isOpen && (
            <div onClick={() => setIsOpen(false)} className="absolute top-[25px] left-[-60px] w-[35px] h-[35px] bg-[#fff] hover:bg-gray-200 cursor-pointer transition-all duration-300 rounded-full flex justify-center items-center"><CgClose className="text-[23px]"/></div>
          )
        }

        {handleRenderContext()}
      </div>
    </div>
  )
}

export default Sidebar