import Banner from '@components/Banner/Banner'
import Footer from '@components/Footer/Footer'
import Header from '@components/Header/Header'
import Info from '@components/Info/Info'
import MainLayout from '@components/MainLayout/MainLayout'
import ParentMenu from '@/pages/ParentMenu/ParentMenu'
import AdvancedHeadling from '@components/AdvancedHeadling/AdvancedHeadling'
import HeadingListProducts from '@components/HeadingListProducts/HeadingListProducts'

function HomeEComerse() {
  return (
    <>
      <div>
        <Header />
        <Banner className='relative z-0'/>
        <MainLayout className='relative z-1'>
          <Info />
        </MainLayout>
      </div>

      <MainLayout>
        <AdvancedHeadling />
        <HeadingListProducts />
      </MainLayout>
      <Footer />
      <ParentMenu />
    </>
  )
}

export default HomeEComerse