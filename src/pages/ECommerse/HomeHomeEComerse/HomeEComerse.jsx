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
      <div className='relative -z-10'>
        <Header />
        <Banner />
      </div>
      <MainLayout>
        <Info />
        <AdvancedHeadling />
        <HeadingListProducts />
      </MainLayout>
      <Footer />
      <ParentMenu />
    </>
  )
}

export default HomeEComerse