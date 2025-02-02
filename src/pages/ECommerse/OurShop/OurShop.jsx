import Footer from "@components/Footer/Footer";
import Header from "@components/Header/Header"
import MainLayout from "@components/MainLayout/MainLayout"
import ShopBanner from "@pages/ECommerse/OurShop/components/ShopBanner";
import ShopProductList from "@pages/ECommerse/OurShop/components/ShopProductList";
import ParentMenu from "@pages/ParentMenu/ParentMenu";
import { useNavigate } from "react-router-dom"

function OurShop() {
  const navigate = useNavigate();
  const handleBackPreviousPage = () => {
    navigate(-1);
  }

  return (
    <div>
      <Header />
      <MainLayout className='relative z-1'>
        <div className="mt-[90px]">
          <div className="flex justify-between text-[14px] text-gray-700">
            <div>Home &gt; <span className="cursor-pointer">Shop</span></div>
            <div onClick={handleBackPreviousPage} className="cursor-pointer">&lt; Return to previous page</div>
          </div>

          <ShopBanner />
          <ShopProductList />
        </div>
      </MainLayout>
      <Footer />
    </div>
  )
}

export default OurShop