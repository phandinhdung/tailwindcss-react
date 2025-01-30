import Banner from '@components/Banner/Banner'
import Footer from '@components/Footer/Footer'
import Header from '@components/Header/Header'
import Info from '@components/Info/Info'
import MainLayout from '@components/MainLayout/MainLayout'
import ParentMenu from '@/pages/ParentMenu/ParentMenu'
import AdvancedHeadling from '@components/AdvancedHeadling/AdvancedHeadling'
import HeadingListProducts from '@components/HeadingListProducts/HeadingListProducts'
import PopularProduct from '@components/PopularProduct/PopularProduct'
import SaleOfTheYear from '@components/SaleOfTheYear/SaleOfTheYear'

function HomeECommerse() {
  // const [listProducts, setListProducts] = useState([]);

  // useEffect( () => {
  //   getProducts().then((res) => {

  //     console.log(res);
  //   });
  // }, []);

  window.scrollTo(0, 0);

  return (
    <div className='flex flex-col justify-center items-center'>
      <div>
        <Header />
        <Banner className='relative z-0' />
        <MainLayout className='relative z-1'>
          <Info />
        </MainLayout>
      </div>

      <MainLayout>
        <AdvancedHeadling />
        <HeadingListProducts />
        <PopularProduct />

      </MainLayout>
      <SaleOfTheYear />
      <Footer />
      <ParentMenu />
    </div>
  )
}

export default HomeECommerse