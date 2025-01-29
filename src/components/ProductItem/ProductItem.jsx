import reLoadIcon from '@icons/svgs/reloadIcon.svg';
import hearIcon from '@icons/svgs/heartIcon.svg';
import cartIcon from '@icons/svgs/cartIcon.svg';
import eyeIcon from '@icons/svgs/eyeIcon.svg';
import './productItem.css'

function ProductItem({scr, prevSrc, name, price}) {
  return (
    <div>
      <div className="product-item relative cursor-pointer">
        <div className="showHideFirstProductImage h-[400px] bg-[url('./src/assets/images/man20.jpg')] bg-cover rounded-md" />
        <div className="showHideSecondProductImage h-[400px] bg-[url('./src/assets/images/man21.jpg')] bg-cover rounded-md" />
        <div className='showFunctionIcons flex flex-col absolute bottom-7'>
          <div className='boxIcon rounded-t-md'>
            <img src={cartIcon} alt='' />
          </div>
          <div className='boxIcon'>
            <img src={hearIcon} alt='' />
          </div>
          <div className='boxIcon'>
            <img src={reLoadIcon} alt='' />
          </div>
          <div className='boxIcon rounded-b-md'>
            <img src={eyeIcon} alt='' />
          </div>
        </div>
      </div>
      <div className='text-[19px] text-gray-500 text-center mt-2 font-Poppins'>Warm Yello </div>
      <div className='text-[16px] text-gray-500 text-center'>$999</div>
    </div>
  )
}

export default ProductItem